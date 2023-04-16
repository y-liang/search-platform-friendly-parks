/**
 * process email both from token and body
 */

const emailStatusChecker = async (req, res, next) => {
    const email = req.tokenEmail ? req.tokenEmail : req.body.email;
    if (req.path == '/signup') { // however, if sign up route, ignore token only take fields
        email = req.body.email;
    }

    // login check token but sign up do not check token



    if (!email) {
        req.email.isMissing = true;  // some routes need to make sure not token is present
        return next(); // exit this middleware early, must have return to exit out of this middleware
    }


    // 3 - check with accounts table - does not exist or exists or deactivated
    const emailStatus = (await db.query(
        selectFromTable.accounts.byEmail.forDeactivated,
        [email]
    )).rows[0]; // undefined or {deactivated_at: null} or {deactivated_at: '2022-03-25 10:13:56-07'} 


    // email exists or has not been deactivated
    if (!emailStatus) {
        req.email.isNonexistent = true;
        return next();
    } else if (emailStatus.deactivated_at !== null) {
        req.email.isDeactivated = true;
        return next();
    } else { // email exists and not deactivated
        req.email.isActive = true;
        return next();
    }


};


export default emailStatusChecker;