import { useContext } from 'react';
import AuthContext from '../context/auth-context';
import { BACKEND_URL } from '../lib/variables';
import useStorage from './utility/useStorage';



/**
 * details for one park or one user
 * handles api calls to backend
 * 
 * type - park or user
 */



const useDetail = () => {
    const auth = useContext(AuthContext);
    const actStorage = useStorage();


    return {

        // comprehensive detail for park or profile by locator
        async locate(type, locator) {
            const url = `${ BACKEND_URL }/details/${ type }/${ locator }`;
            console.log('url', url);
            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    'content-type': 'application/json',
                    'authorization': `bearer ${ auth.token }`
                },
            });

            const data = await response.json();



            // data - park { essentials, ratings, reviews, audience: {authenticated}  }
            // data - profile { essentials, pets, favParks, reviews, audience: {authenticated, authorized, locator?} }


            // clear out bad token before handling further
            if (response.headers.has('Clear-Token')) {
                actStorage.remove();
            }


            // handle error and response, send result, always return message not error, error is for internal diagnosis
            switch (response.status) {
                case 422:
                    return { message: 'Unable to proceed at the moment. We are working on it. Try again later.' };
                case 401:
                    return { message: data.error, notfound: data.notfound };
                case 200:
                    return data;
                default:
                    return { message: 'Unavailable.' };
            }
        },


        // only profile for now, later for park edit with admin access
        async edit(type, locator) {
            const url = `${ BACKEND_URL }/details/edit/${ type }${ locator }`;
        },
    };
};



export default useDetail;