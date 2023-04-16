import { useContext } from 'react';
import AuthContext from '../context/auth-context';
import { BACKEND_URL } from '../lib/variables';


const useFavorite = () => {
    const auth = useContext(AuthContext);

    return {
        // check if the park is favored by user
        async pair(locator) {
            const url = `${BACKEND_URL}/favorites/pair/park${locator}`;
            const data = await fetch(url, {
                method: 'GET',
                headers: {
                    'content-type': 'application/json',
                    'authorization': `bearer ${auth.token}`
                },
            }).then(res => res.json()); // { paired: true } or { paired: false }
            return data;
        },

        // add a new favorite under the user
        async assert(locator) {
            const url = `${BACKEND_URL}/favorites/plus/park${locator}`;
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                    'authorization': `bearer ${auth.token}`
                }
            });
            const data = await response.json();
            return data;
        },

        // remove a favorite park for the user
        async remove(locator) {
            const url = `${BACKEND_URL}/favorites/minus/park${locator}`;
            const response = await fetch(url, {
                method: 'DELETE',
                headers: {
                    'content-type': 'application/json',
                    'authorization': `bearer ${auth.token}`
                }
            });
            const data = response.json();
            return data;
        },
    };
};


export default useFavorite;