
/**
 * checks data existence from request and input format validity
 * validate request and the data received
 */

// regex
// const validName = value => /^[a-z0-9]{6,18}$/.test(value); // only allow lowercase letters and numbers, min 6 max 18 length
const validEmail = value => /^[a-z0-9-+.]+@[a-z0-9-.]+\.[a-z0-9]+$/.test(value); // on front end, use form input type="email" in html to validate as well. best way is to send an email to verify
const validPassword = value => /^[^\s]{6,36}$/.test(value); // allow any characters except whitespace /s, min 6 max 36 length



const fieldValidator = async (req, res, next) => {
    const { email, password } = req.body; // could be null? or || null

    switch (req.path) {
        case '/signup':
        case '/login':
            // 1 - check if the request is complete, bad request
            if ([email, password].some(value => value == null || undefined)) {
                return res.status(422).send({ error: 'Unprocessable. Incomplete request.' });
            }

            // 2 - check if fields are not empty
            if (email == '') {
                return res.status(200).send({ message: 'Enter an email.' });
            }

            if (password == '') {
                return res.status(200).send({ message: 'Enter an password.' });
            }

            // 3 - check regex of email and password entered
            if (!validEmail(email)) {
                return res.status(200).send({ message: 'Enter a valid email.' });
            }

            if (!validPassword(password)) {
                return res.status(200).send({ message: 'Enter a valid password, min 6 max 36 length, without spaces.' });
            }

            return next();

        case '/logout':
            return next();

        case '/forget':
            // 1 - check if the request is complete, bad request
            if (!email) {
                return res.status(422).send({ error: 'Unprocessable. Incomplete request.' });
            }

            // 2 - check if fields are not empty
            if (email == '') {
                return res.status(200).send({ message: 'Enter an email.' });
            }

            // 3 - check regex of email and password entered
            if (!validEmail(email)) {
                return res.status(200).send({ message: 'Enter a valid email.' });
            }

            return next();

        case '/reset':
        case '/deactivate':
            // 1 - check if the request is complete, bad request
            if (!password) {
                return res.status(422).send({ error: 'Unprocessable. Incomplete request.' });
            }
            // 2 - check if fields are not empty
            if (password == '') {
                return res.status(200).send({ message: 'Enter an password.' });
            }
            // 3 - check regex of email and password entered
            if (!validPassword(password)) {
                return res.status(200).send({ message: 'Enter a valid password, min 6 max 36 length, without spaces.' });
            }

            return next();

        default:
            break;
    }

    // no next() here
};


export default fieldValidator;