import jwt from 'jsonwebtoken';
import db from '../database/index.js';

import { insertIntoTable } from '../database/queries/insert.js';
import { selectFromTable } from '../database/queries/select.js';
import { updateTable } from '../database/queries/update.js';
import { sendEmailForgetPassword } from '../email/sendEmail.js';
import { compare, hash } from '../utilities/encryptCredentials.js';
import { JWT_SECRET } from '../utilities/environmental.js';

class Profile {
    #request;
    id;
    message;
    completed;

    constructor(request) {
        this.#request = request;
    }


    async signUp() {
        const { email, password } = this.#request.body;
        const status = this.#request.email; // produced by middleware - isActive, isNonexistent, isDeactivated

        const passHash = await hash(password);

        // should not need this if emailStatusCheck works properly
        if (status.isActive) {
            return;
        }



        // enter info into database based on email status, then log activity with email and or profile id
        if (status.isNonexistent) {
            await db.query(insertIntoTable.accounts, [this.id, email, passHash]);
            await db.query(insertIntoTable.accountActivities, [email, this.id, 'signup']);
        } else { // status.isDeactivated
            await db.query(updateTable.accounts.reactivate, [this.id, passHash, email]);
            await db.query(insertIntoTable.accountActivities, [email, this.id, 'reactivate']);
        }

        // log activity with both profile id and account id for signup, others only with profile id
        this.message = 'You have successfully signed up.';
        this.completed = true;
    }

    async logIn() {
        const { email, password } = this.#request.body;
        const passHash = (await db.query(
            selectFromTable.accounts.byEmail.forPassHash, [email]
        )).rows[0].password_hash;

        const matched = await compare(password, passHash); // return a boolean
        if (!matched) {
            this.message = 'Wrong password.';
            this.completed = false;
        } else {
            // log activity
            await db.query(insertIntoTable.accountActivities, [email, null, 'login']);
            this.message = 'You have successfully logged in.';
            this.completed = true;
        }


    }

    async logOut() {
        this.id = this.#request.session.profile.id;
        // log activity
        await db.query(insertIntoTable.accountActivities, [null, this.id, 'logout']);
        this.message = 'You are logged out.';
        this.completed = true;
    }


    async forget() {
        const { email } = this.#request.body;
        // log activity
        await db.query(insertIntoTable.accountActivities, [email, null, 'forget']);

        // send email with json web token in reset link
        const token = jwt.sign({ email, via: 'forget' }, JWT_SECRET, { expiresIn: 15 * 60 });
        const link = `${ BASEURL_FRONTEND }/account/password-reset?token=${ token }`;
        const status = await sendEmailForgetPassword(email, link); // status code from email server

        // respond with message that says email sent, or error status from email server
        if (status < 400) {
            this.message = 'An email to reset your password has been sent.';
            this.completed = true;
        } else { // error might have been caught before here
            this.message = 'Unable to process your request at the moment. Try again later.';
            this.completed = false;
        }
    }


    async reset() {
        const { password } = this.#request.body;
        const { email } = this.#request.token;

        const passHash = await hash(password);

        await db.query(
            updateTable.accounts.reset, [passHash, email]
        );

        await db.query(insertIntoTable.accountActivities, [email, null, 'reset']);

        this.message = 'You have successfully reset your password. You can now log in.';
        this.completed = true;

    }


    async deactivate() {
        this.id = this.#request.session.profile.id;
        const { password } = req.body;
        const passHash = (await db.query(
            selectFromTable.accounts.byEmail.forPassHash, [email]
        )).rows[0].password_hash;
        const matched = await compare(password, passHash);
        if (!matched) {
            this.message = 'Wrong password.';
            this.completed = false;
            return;
        }

        // update account for deactivate
        await db.query(updateTable.accounts.deactivate, [this.id]);

        // update profile for delete, not sure if jsonb column data valid?
        await db.query(updateTable.profiles.remove, [this.id]);


        // log activity
        await db.query(insertIntoTable.accountActivities, [email, null, 'deactivate']);
        this.message = 'You have successfully deactivated.';
        this.completed = true;
    }



}

export default Profile;