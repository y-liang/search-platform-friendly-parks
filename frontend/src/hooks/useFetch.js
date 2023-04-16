import { useContext, useEffect, useState } from 'react';
import AuthContext from './context/auth-context';

import { BACKEND_URL } from '../lib/variables';
import useStorage from './utility/useStorage';


// https://reactjs.org/docs/hooks-custom.html


// fetch() - return a Promise that resolves to a Response object
// may throw AbortError and TypeError exceptions

const useFetch = () => {
    const auth = useContext(AuthContext);
    const actStorage = useStorage();

    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState([]);


    // GET POST request
    // arg - path, param, fields if any
    const post = async (path, param, fields) => {

        // const url = `${BACKEND_URL}/account/signup`;
        const url = `${BACKEND_URL}/${path}/:${param}`;
        setIsLoading(true);
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                    'authorization': `bearer ${auth.token}`
                },
                body: JSON.stringify(fields) // javascript object, convert to json with stringify
            });

            // status in the range 200-299 or not 
            if (!response.ok) {
                setError(new Error(
                    `${response.status} - Unable to proceed at the moment. We are working on it. Try again later.`
                ));
            } else {
                const data = await response.json(); // {token, user, message} or {error}
                setData(data);
            }


            // clear out bad token before handling further
            if (response.headers.has('Clear-Token')) {
                actStorage.remove();
            }

            // parse token before store
            if (response.headers.has('Set-Token')) {
                actStorage.set(JSON.parse(response.headers.get('Set-Token')));
            }

        } catch (error) {
            setError(error);
        } finally {
            setIsLoading(false);
        }



    };

    return { data, error, isLoading, post };



    // if (error) {
    //     return <div>Error: {error.message}</div>;
    // } else if (!isLoaded) {
    //     return <div>Loading...</div>;
    // } else {
    //     return (
    //         <ul>
    //             {data.map(item => (
    //                 <li key={item.id}>
    //                     {item.name} {item.price}
    //                 </li>
    //             ))}
    //         </ul>
    //     );
    // }
};
