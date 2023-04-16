/**
 * process email both from token and body
 * no early exit, just process for req
 * 
 * 
 * 
 */
import db from '../database/index.js';
import { selectFromTable } from '../database/queries/select.js';

// check email status - active, deactivated, nonexistent
const emailStatusChecker = async (req, res, next) => {
    req.email = {}; // instantiate for holding email status

    // return early if found no email, not anymore
    // if (!req.token?.email || !req.body.email) {
    //     return res.status(422).send({ error: 'Unprocessable.' });
    // }


    const email = req.path == '/reset' ? req.token.email : req.body.email;

    // check with accounts table - does not exist or exists or deactivated
    const status = (await db.query(
        selectFromTable.accounts.byEmail.forDeactivated,
        [email]
    )).rows[0]; // undefined or {deactivated_at: null} or {deactivated_at: '2022-03-25 10:13:56-07'} 

    if (!status) { // does not exist
        req.email.isNonexistent = true;
    } else if (status.deactivated_at !== null) { // has been deactivated
        req.email.isDeactivated = true;
    } else { // email exists and not deactivated
        req.email.isActive = true;
    }



    switch (req.path) {
        case '/signup':
            if (req.email.isActive) {
                return res.status(200).send({ message: 'That email is associated with a profile. Would you like to log in instead?' });
            }
            return next();
        case '/login':
        case '/forget':
        case '/reset':
            if (!req.email.isActive) {
                return res.status(200).send({ message: 'There is no profile associated with this email.' });
            }
            return next();
        default:
            break;
    }

    next();
};


export default emailStatusChecker;