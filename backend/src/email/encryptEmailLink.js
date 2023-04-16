import dotenv from 'dotenv';
import crypto from 'crypto';
import { HMAC_KEY } from '../utilities/environmental.js';


let host = 'https://wagtrail.dev.yliang.net/recovery?email=hello@wagtrail.dev.yliang.net&signature=';
let path = '';

const HMAC_ALGO = 'sha256';
const hmac = crypto.createHmac(HMAC_ALGO, HMAC_KEY);


/**
 * hash user email address as path param
 */
export const hash = (email) => {
    // const hmac = crypto.createHmac(HMAC_ALGO, HMAC_KEY);
    let x = hmac.update(email).digest('hex');

    return x;
};

/**
 * email - from user email
 * signature - from the database stored
 */
// const { email } = req.params
// const emailHash = req.headers['authorization'].split(' ')[1] || null

export const compare = (email, signature) => {
    const emailBuf = hmac.update(email);
    const signatureBuf = Buffer.from(HMAC_KEY, 'hex');


    const bool = crypto.verify(HMAC_ALGO, emailBuf, HMAC_KEY, signatureBuf);

    console.log('bool', bool);
};



let a = hash('hi@wagtrail.dev.yliang.net');
let b = compare('hi@wagtrail.dev.yliang.net', 'c3136c57919b345867d4c7b73cda2be2dedc68f196ee58d85d1c8cc4dd07db27');




// differences between email hash and password hash
// email - hmac; password - scrypt
// key and salt are both a string for algorithm

// email hash - uses static 'key', hmac key, and only one for all emails
// password hash - uses dynamic 'salt', random byte, and is generated every time for each email, a concatenation of password and salt is fed to the algo function  

// email - does not need to be stored in a database as the key is an environment variable
// password - needs to be stored as each one has its own salt

//
