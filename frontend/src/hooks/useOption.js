import { BACKEND_URL } from '../lib/variables';

/**
 * options for user detail
 * handles api calls to backend
 * 
 * type - dog breeds or usa cities
 */

const useOption = () => {
    return {
        async obtain(name, term) {
            const url = `${BACKEND_URL}/options/set${name}?term=${term}`;
            const data = await fetch(url).then(res => res.json()); // [..., 'Dalmatian', 'Afghan Hound', ...]
            return data;
        }
    };
};


export default useOption;