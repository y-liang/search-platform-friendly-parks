import express from 'express';
import tokenAuthenticator from '../middleware/tokenAuthenticator.js';
import emailStatusChecker from '../middleware/emailStatusChecker.js';
import fieldValidator from '../middleware/fieldValidator.js';
import Profile from '../units/Profile.js';


const router = express.Router();

// router.use(tokenAuthenticator); // if req.tokenEmail presents, meaning the token is valid
router.use(emailStatusChecker); // email = req.tokenEmail ? req.tokenEmail : req.body.email;
router.use(fieldValidator); // return response if fields invalid

// session replacing token email

/* -- sign up -- */
router.post('/signup', async (req, res) => {
    // console.log('check req.session', req.session, 'check req.cookies', req.cookies);
    // ignore token, process fields only, stay logged in?

    const profile = new Profile(req);
    try {
        await profile.signUp();
    } catch (err) {
        console.error(`Error in ${ req.path }`, err);
        return res.status(500).send({ error: 'An error occurred. Try again later.' });
    }



    // send response with message to display in frontend
    res.status(200).send({
        message: profile.message,
        redirect: profile.completed
    }); // no need to return when it's finished?
});



/* -- log in -- */
router.post('/login', async (req, res) => {

    const profile = new Profile(req);
    try {
        await profile.logIn();
    } catch (err) {
        console.error(`Error in ${ req.path }`, err);
        return res.status(500).send({ error: 'An error occurred. Try again later.' });
    }




    // send response;
    res.status(200).send({
        message: profile.message,
        redirect: profile.completed
    });
});


/* -- log out -- */
router.post('/logout', async (req, res) => {
    if (!req.session.profile) {
        return res.status(403).send({ error: 'Forbidden access.' });
    }


    const profile = new Profile(req);
    try {
        await profile.logOut();
    } catch (err) {
        console.error(`Error in ${ req.path }`, err);
        return res.status(500).send({ error: 'An error occurred. Try again later.' });
    }


    // send response
    res.status(200).send({
        message: profile.message,
        redirect: profile.completed
    });
});


/* -- password forget -- */
router.post('/forget', async (req, res) => {
    const profile = new Profile(req);
    try {
        await profile.forget();
    } catch (err) {
        console.error(`Error in ${ req.path }`, err);
        return res.status(500).send({ error: 'An error occurred. Try again later.' });
    }

    res.status(200).send({
        message: profile.message,
        redirect: profile.completed
    });
});


/* -- password reset -- */
router.post('/reset', tokenAuthenticator, async (req, res) => {
    const profile = new Profile(req);
    try {
        await profile.reset();
    } catch (err) {
        console.error(`Error in ${ req.path }`, err);
        return res.status(500).send({ error: 'An error occurred. Try again later.' });
    }

    res.status(200).send({
        message: profile.message,
        redirect: profile.completed // redirect to login
    });
});



/* -- deactivate account and delete profile -- */
router.post('/deactivate', async (req, res) => {
    // clear profile session
    if (!req.session.profile) {
        return res.status(403).send({ error: 'Forbidden access.' });
    }

    const profile = new Profile(req);
    try {
        await profile.deactivate();
    } catch (err) {
        console.error(`Error in ${ req.path }`, err);
        return res.status(500).send({ error: 'An error occurred. Try again later.' });
    }

    // clear profile session
    req.session.profile = null;

    // 7 - send response
    res.status(200).send({
        message: profile.message,
        redirect: profile.completed
    });
});


/* -- authenticate token -- */
// router.get('/authenticate', tokenAuthenticator, async (req, res) => {
//     if (req.email.isActive) {
//         res.status(200).send({ valid: true });
//     } else {
//         res.status(200).send({ valid: false });
//     }
// });


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