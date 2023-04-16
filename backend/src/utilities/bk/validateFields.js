/**
 * checks data existence from request and input format validity
 * validate request and the data received
 */

// regex
// const validName = value => /^[a-z0-9]{6,18}$/.test(value); // only allow lowercase letters and numbers, min 6 max 18 length
const validEmail = value => /^[a-z0-9-+.]+@[a-z0-9-.]+\.[a-z0-9]+$/.test(value); // on front end, use form input type="email" in html to validate as well. best way is to send an email to verify
const validPassword = value => /^[^\s]{6,36}$/.test(value); // allow any characters except whitespace /s, min 6 max 36 length



const validate = {
    // return an array with res.send message if false
    signup(email, password) {

        // 1 - check if the request is complete, bad request
        if ([email, password].some(value => value == null || undefined)) {
            return {
                status: 400,
                error: 'Missing an email or a password.'
            };
        }

        // 2 - check if fields are not empty
        if (email == '') {
            return {
                status: 200,
                error: 'Enter an email.'
            };
        }

        if (password == '') {
            return {
                status: 200,
                error: 'Enter a password.'
            };
        }


        // 3 - check regex of email and password entered
        if (!validEmail(email)) {
            return {
                status: 200,
                error: 'Enter a valid email.'
            };
        }

        if (!validPassword(password)) {
            return {
                status: 200,
                error: 'Enter a valid password, min 6 max 36 length, without spaces.'
            };
        }

        return {
            status: 200,
            message: 'Successful.'
        };
    },

    login(email, password) {
        // 1 - check if the request is complete, bad request
        if ([email, password].some(value => value == null || undefined)) {
            return {
                status: 400,
                error: 'Missing an email or a password.'
            };
        }

        // 2 - check if fields are not empty
        if (email == '') {
            return {
                status: 200,
                error: 'Enter an email.'
            };
        }

        if (password == '') {
            return {
                status: 200,
                error: 'Enter a password.'
            };
        }


        // 3 - check regex of email and password entered
        if (!validEmail(email)) {
            return {
                status: 200,
                error: 'Enter a valid email.'
            };
        }

        if (!validPassword(password)) {
            return {
                status: 200,
                error: 'Enter a valid password, min 6 max 36 length, without spaces.'
            };
        }

        return {
            status: 200,
            message: 'Successful.'
        };
    },

    forget(email) {
        // 1 - check if the request is complete, bad request
        if (!email) {
            return {
                status: 400,
                error: 'Missing an email.'
            };
        }

        // 2 - check if fields are not empty
        if (email == '') {
            return {
                status: 200,
                error: 'Enter an email.'
            };
        }

        // 3 - check regex of email and password entered
        if (!validEmail(email)) {
            return {
                status: 200,
                error: 'Enter a valid email.'
            };
        }

        return {
            status: 200,
            message: 'Successful.'
        };

    },

    reset(password) {
        // 1 - check if the request is complete, bad request
        if (!password) {
            return {
                status: 400,
                error: 'Missing a password.'
            };
        }
        // 2 - check if fields are not empty
        if (password == '') {
            return {
                status: 200,
                error: 'Enter a password.'
            };
        }
        // 3 - check regex of email and password entered
        if (!validPassword(password)) {
            return {
                status: 200,
                error: 'Enter a valid password, min 6 max 36 length, without spaces.'
            };
        }
        return {
            status: 200,
            message: 'Successful.'
        };

    }




};




export default validate;