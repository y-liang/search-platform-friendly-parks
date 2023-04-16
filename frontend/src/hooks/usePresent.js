

/**
 * this manages the api calls for interaction between profile and park
 * suggestions, ratings, reviews - uneditable after posting
 * except favorites - editable after posting
 */

import { useContext } from 'react';
import AuthContext from '../context/auth-context';
import { BACKEND_URL } from '../lib/variables';





const usePresent = () => {
    const auth = useContext(AuthContext);


    return {

        // suggest an edit, dog policy
        async suggest(locator, content) {

            // call backend, content { road, trail, beach, campground } boolean or null
            const url = `${ BACKEND_URL }/presents/suggestions/park${ locator }`;
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                    'authorization': `bearer ${ auth.token }`
                },
                body: JSON.stringify(content)
            });
            const data = await response.json();



            return data;
        },

        // give a rating
        async rate(locator, content) {

            // call backend, content { road, trail, beach, campground, friendly, overall } value 1 to 5
            const url = `${ BACKEND_URL }/presents/ratings/park${ locator }`;
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                    'authorization': `bearer ${ auth.token }`
                },
                body: JSON.stringify(content)
            });
            const data = await response.json();

            return data;

        },

        // write a review
        async review(locator, content) {

            // call backend, content { content, pet, date }
            const url = `${ BACKEND_URL }/presents/reviews/park${ locator }`;
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                    'authorization': `bearer ${ auth.token }`
                },
                body: JSON.stringify(content)
            });
            const data = await response.json();

            return data;

        },



        // not yet
        async display(type, locator, page) {
            const PAGE_LIMIT = 5;

            // page - page number - the number of the page currently displayed
            const offset = (page - 1) * PAGE_LIMIT;

            // urls to call
            const urlPark = `${ BACKEND_URL }/parks/${ locator }/presents/limit${ PAGE_LIMIT }/offset${ offset }`;
            const urlUser = `${ BACKEND_URL }/users/${ locator }/presents/limit${ PAGE_LIMIT }/offset${ offset }`;


            switch (type) {
                case 'park':
                    // const data = await fetch(urlPark).then(res => res.json());

                    break;
                case 'user':
                    // const data = await fetch(urlUser).then(res => res.json());


                    break;

                default:
                    break;
            }
        },







    };
};



export default usePresent;