import { useContext } from 'react';
import AuthContext from '../../context/auth-context.js';


// the state updates the context provider value in AppFrame.js
// authentication {token, user} and [authentication, setAuthentication] = useState(initialState);
// setToken here for immediate update
// email and via encoded in token, so one token always


const useStorage = () => {
    const auth = useContext(AuthContext);


    return {
        set(token) {
            auth.setToken(token);
            localStorage.removeItem('profile_session');
            localStorage.setItem('profile_session', token);
        },


        remove() {
            auth.setToken(null);
            localStorage.removeItem('profile_session'); // not removing, stay logged in
        }
    };
};



export default useStorage;