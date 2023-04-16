const sessionChecker = async (req, res, next) => {
    if (req.session.profile) {
        next();
    } else {
        // if no session existed 
    }


};