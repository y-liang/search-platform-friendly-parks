import express from 'express';
import jwt from 'jsonwebtoken';
import db from '../database/index.js';
import tokenAuthenticator from '../middleware/tokenAuthenticator.js';
import emailStatusChecker from '../middleware/emailStatusChecker.js';
import fieldValidator from '../middleware/fieldValidator.js';

import { hash as hashPassword, compare as comparePasswordHash } from '../utilities/encryptCredentials.js';
import { sendEmailForgetPassword } from '../email/sendEmail.js';
import { selectFromTable } from '../database/queries/select.js';
import { updateTable } from '../database/queries/update.js';
import { insertIntoTable } from '../database/queries/insert.js';
import { BASEURL_FRONTEND } from '../utilities/constants.js';
import { JWT_SECRET } from '../utilities/environmental.js';


const router = express.Router();

// router.use(tokenAuthenticator); // if req.tokenEmail presents, meaning the token is valid
router.use(emailStatusChecker); // email = req.tokenEmail ? req.tokenEmail : req.body.email;
router.use(fieldValidator); // return response if fields invalid

// session replacing token email

/* -- sign up -- */
router.post('/signup', async (req, res) => {
    console.log('check req.session', req.session, 'check req.cookies', req.cookies);
    // ignore token, process fields only, stay logged in?
    // req.session - Session { profile: { email: 'user09@email.com'; } }
    // req.cookies - {
    //     session: 'eyJ1c2VyIjoidXNlcjA5QGVtYWlsLmNvbSJ9',
    //     'session.sig': 'VVCNqg08BWp83XPj88Oju6yznWk'
    // };

    // 2 - email and password fields have been validated via middleware
    const { email, password } = req.body;

    // 3 - encrypt user password using node crypto scrypt function https://nodejs.org/api/crypto.html
    const passwordHash = await hashPassword(password);

    // 4 - create a new profile, return profile id for accounts table
    const profileId = (await db.query(
        insertIntoTable.profiles
    )).rows[0].id;


    // 5 - enter account data to database, insert when email didn't exist or update when email already existed before but deactivated, while returning user id for activity log next
    if (req.email.isNonexistent) {
        const accountId = (await db.query(
            insertIntoTable.accounts, [profileId, email, passwordHash]
        )).rows[0].id; // a new account with never existed email
        await db.query(insertIntoTable.accountActivities, [profileId, accountId, 'signup']); // log account activity with account id, then send response next
    } else { // req.email.isDeactivated
        const accountId = (await db.query(
            updateTable.accounts.reactivate, [profileId, passwordHash, email]
        )).rows[0].id; // return account id, update account row on a new profile id, password, reactivate timestamp, and deactivate
        await db.query(insertIntoTable.accountActivities, [profileId, accountId, 'reactivate']); // log account activity with account id
    }

    // make sure session starts new, session might have other fields other than profile
    if (req.session.isPopulated) {
        req.session.profile = null;
    }
    req.session.profile = { email };

    // 8 - send response with message to display in frontend
    res.status(200).send({
        message: 'You have successfully signed up.',
        redirect: true
    }); // no need to return when it's finished

    return;
});



/* -- log in -- */
router.post('/login', async (req, res) => {


    // 2 - email and password fields have been validated via middleware
    const { email, password } = req.body;

    // 3 - compare user password with the hash stored in database
    const hashStored = (await db.query(
        selectFromTable.accounts.byEmail.forPassHash, [email]
    )).rows[0].password_hash;

    const matched = await comparePasswordHash(password, hashStored);
    if (!matched) {
        res.status(200).send({
            message: 'Wrong password.'
        });
        return; // if password does not match, exit early
    }

    // 4 - get account id for activity, log account activity with user id, then send response next
    const accountId = (await db.query(
        selectFromTable.accounts.byEmail.forId, [email]
    )).rows[0].id;
    await db.query(insertIntoTable.accountActivities, [null, accountId, 'login']);

    // make sure session starts new
    if (req.session.isPopulated) {
        req.session.profile = null;
    }
    req.session.profile = { email };


    // 7 - send response;
    res.status(200).send({
        message: 'You have successfully logged in.',
        redirect: true
    });


    return;
});


/* -- log out -- */
router.post('/logout', async (req, res) => {


    // 2 - must have tokenEmail since tokenEmailActive is true
    const email = req.tokenEmail;

    // 3 - get user id to log account activity, log out
    const accountId = (await db.query(
        selectFromTable.accounts.byEmail.forId, [email]
    )).rows[0].id;
    await db.query(insertIntoTable.accountActivities, [null, accountId, 'logout']);


    // clear profile session
    if (!req.session.profile) {
        res.status(403).send('forbidden');
    } else {
        res.session.profile = null;
    }

    // 4 - send response
    res.status(200).send({ redirect: true });

});


/* -- password forget -- */
router.post('/forget', async (req, res) => {
    // 1 - token header with active email, already logged in 
    if (req.tokenEmailActive && req.tokenVia == 'login') { // if token via is not login, ignore token
        res.status(200).send({ redirect: true }); // redirect to a page that says login successful
        return;
    }



    // 2 - email has been validated via middleware
    const { email } = req.body;

    // 3 - find account id via email and log account activity, forget password, and send response next
    const accountId = (await db.query(
        selectFromTable.accounts.byEmail.forId, [email]
    )).rows[0].id;
    await db.query(insertIntoTable.accountActivities, [null, accountId, 'forget']);

    // 4 - create token with email to add to url next
    const token = jwt.sign({ email, via: 'forget' }, JWT_SECRET, { expiresIn: 15 * 60 }); // expire in 15 mins

    // 5 - append the url with token, change to BASEURL_FRONTEND in production
    const link = `${BASEURL_FRONTEND}/account/password-reset?token=${token}`;

    // 6 - send an email to user via third party email server
    const status = await sendEmailForgetPassword(email, link); // status code from email server

    // 7 - respond with message that says email sent, or error status from email server
    if (status < 400) {
        res.status(status).send({
            message: 'An email to reset your password has been sent.'
        });
    } else {
        res.status(status).send({
            error: 'Unable to send you an email at the moment. Try again later.'
        });
    }
});


/* -- password reset -- */
router.post('/reset', async (req, res) => {


    // 1 - the token is not reset token sent via header from email link
    if (!req.tokenVia !== 'reset') {
        res.status(401).send({ error: 'The reset link is invalid.' });
        return;
    }


    // else now req.tokenVia !== 'reset' && req.tokenEmailActive

    // 2 - password has been validated via middleware
    const { password } = req.body;


    // 3 - encrypt user password using node crypto scrypt function https://nodejs.org/api/crypto.html
    const passwordHash = await hashPassword(password);

    // 4 - update user data in database, while returning user id for activity log next
    const accountId = (await db.query(
        updateTable.accounts.reset, [passwordHash, email]
    )).rows[0].id;
    await db.query(insertIntoTable.accountActivities, [null, accountId, 'reset']);// log account activity with user id, then send response next

    // 5 - do not send token, instead require log in
    res.status(200).send({
        message: 'You have successfully reset your password. You can now log in.',
        redirect: true // redirect to login
    }); // or send no token and force use to log in with new password
});



/* -- deactivate account and delete profile -- */
router.post('/deactivate', async (req, res) => {

    // 2 - password required to deactivate, req body input field
    const email = req.tokenEmail; // from middleware 
    const { password } = req.body;

    // 3 - compare user password with the hash stored in database
    const hashStored = (await db.query(
        selectFromTable.accounts.byEmail.forPassHash, [email]
    )).rows[0].password_hash;

    const matched = await comparePasswordHash(password, hashStored);
    if (!matched) {
        res.status(200).send({
            message: 'Wrong password.'
        });
        return; // if password does not match, exit early
    }

    // 4 - update account for deactivate
    const { id: accountId, profile_id: profileId } = (await db.query(
        updateTable.accounts.deactivate, [email]
    )).rows[0];

    // 5 - update profile for delete, not sure if jsonb column data valid?
    await db.query(updateTable.profiles.remove, [JSON.stringify({ deletedBy: req.tokenEmail }), profileId]);

    // 6 - log account activities
    await db.query(insertIntoTable.accountActivities, [profileId, accountId, 'deactivate']);


    // clear profile session
    if (!req.session.profile) {
        res.status(403).send('forbidden');
    } else {
        res.session.profile = null;
    }


    // 7 - send response
    res.status(200).send({
        message: 'You have successfully deactivated your account.',
        redirect: true
    });
});


/* -- authenticate token -- */
router.get('/authenticate', async (req, res) => {
    if (req.tokenEmailActive) {
        res.status(200).send({ valid: true });
    } else {
        res.status(200).send({ valid: false });
    }
});


export default router;



/*

 * req.header
token - tokenEmail + tokenVia
tokenEmail - email.isNonexistent / emailDeactivated / emailActive
tokenVia - ‘signup’, ‘login’, ‘forget’

 * req.body
input fields -> email + password / email / password

 * middleware
tokenAuthenticator - req.header token tokenEmail + tokenVia
emailStatusChecker - req.header tokenEmail / req.body email
fieldValidator - req.body input fields

*/


/**
 * signup - ignore token, process fields only, stay logged in
 * login - consider token for redirect, login and redirect when - email and via - valid, otherwise fields
 * logout - process token, log out anyway with or without token email being active
 * forget - consider token for redirect, login and redirect when - email and via - valid, otherwise fields
 * reset - ignore login or other token, process reset token, login and redirect when - email and via - valid, otherwise fields
 * deactivate - process token and field, deactivate when - email and via - valid and password field valid
 * authenticate - token only
 */


// https://expressjs.com/en/resources/middleware/cookie-session.html



    // 1 - token header with active email, already logged in
    // if (req.tokenEmailActive && req.tokenVia == 'login') { // if token via is not login, ignore token
    //     res.status(200).send({ redirect: true }); // redirect to a page that says login successful
    //     return;
    // }


// // 6 - generate json web token with locator and email
    // const token = jwt.sign({ email, via: 'signup' }, JWT_SECRET, { expiresIn: 60 * 60 });

    // // 7 - append token to response header
    // res.append('Set-Token', JSON.stringify(token));
    // res.append('Access-Control-Expose-Headers', 'Set-Token');


    // refactor above - send response with cookie that contains profile id





/*
 * 0 - middleware process token if any
 * 0 - middleware check fields validation, data present and field valid
 * 0 - middleware check if already existed in database and if or not deactivated
 * 1 - early exit or redirect if any
 * 2 - request params, headers, body deconstruction
 * 3 - password encryption or comparison
 * 4 - database insert or select
 * 5 - generate json web token
 * 6 - log account activity
 * 7 - response send, either token or error, and so far status code 200 or 401
 */