// create react app includes dotenv, no need to install and import

// environment
export const NODE_ENV = process.env.NODE_ENV;

// backend
export const BACKEND_URL = NODE_ENV == 'production' ?
    process.env.REACT_APP_BACKEND_URL : process.env.REACT_APP_BACKEND_URL_DEV;


// domain
export const DOMAIN_TOP_LEVEL = process.env.REACT_APP_DOMAIN_TOP_LEVEL;


// third party api
export const REACT_APP_GOOGLEMAPS_API_KEY = process.env.REACT_APP_GOOGLEMAPS_API_KEY;
