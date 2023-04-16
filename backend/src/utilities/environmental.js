import dotenv from 'dotenv';
import path from 'path';

dotenv.config();
// dotenv.config({ path: '../../../.env' });

// environment
export const NODE_ENV = process.env.NODE_ENV;



// express
export const EXPRESS_PORT = process.env.EXPRESS_PORT;


// postgres
export const PG_HOST = NODE_ENV == 'production' ?
    process.env.POSTGRES_HOST : process.env.POSTGRES_HOST_DEV;

export const PG_PORT = NODE_ENV == 'production' ?
    process.env.POSTGRES_PORT : process.env.POSTGRES_PORT_DEV;

export const PG_USER = process.env.POSTGRES_USER;
export const PG_DATABASE = process.env.POSTGRES_DATABASE;
export const PG_PASSWORD = process.env.POSTGRES_PASSWORD;


// keys
export const HMAC_KEY = process.env.HMAC_KEY;
export const JWT_SECRET = process.env.JWT_SECRET;
export const COOKIE_SESSION_KEY_A = process.env.COOKIE_SESSION_KEY_A;
export const COOKIE_SESSION_KEY_B = process.env.COOKIE_SESSION_KEY_B;


// third party api
export const GOOGLE_MAPS_API_KEY = process.env.GOOGLE_MAPS_API_KEY;
export const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY;




