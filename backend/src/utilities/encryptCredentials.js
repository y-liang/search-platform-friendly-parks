import crypto from 'crypto';
import { promisify } from 'util';

const scrypt = promisify(crypto.scrypt);



/**
 * salt - random string to scrypt
 * key - hashed password
 */

export const hash = async (password) => {
    const salt = crypto.randomBytes(8).toString('hex');
    const key = await scrypt(password, salt, 64).then(buf => buf.toString('hex'));
    return ('$scrypt$ln=16384,r=8,p=1$' + salt + '$' + key);
};


/**
 * password - from user entered;
 * signature - from the database stored, contains other info and value;
 * value - contained inside signature, that matters; 
 */
export const compare = async (password, signature) => {
    const [salt, key] = signature.split('$').slice(3, 5);
    const passwordBuf = await scrypt(password, salt, 64);
    const signatureBuf = Buffer.from(key, 'hex');
    return crypto.timingSafeEqual(passwordBuf, signatureBuf);
};








// the salt and the password (or its version after key stretching) are concatenated and fed to a cryptographic hash function, and the output hash value (but not the original password) is stored with the salt in a database// string (password + salt) to be hashed
// hashed value = sha256 (password + salt)