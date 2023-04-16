import { createContext, useState } from 'react';
import { SESSION_STORAGE_PROFILE } from '../lib/constants';

const AuthContext = createContext({
    token: null,
    setToken: () => { return; }
});


// https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage
// sessionStorage may throw an exception - SecurityError

// Storage API - https://developer.mozilla.org/en-US/docs/Web/API/Storage


// setItem(keyName, keyValue) return none, may throw an exception if the storage is full
function setSessionStorageProfile(data) {
    try {
        sessionStorage.setItem(SESSION_STORAGE_PROFILE, JSON.stringify(data));
    } catch (error) {
        console.warn('sessionStorage.setItem did not work', error.toString());
    }
}

// getItem(keyName) return string or null
function getSessionStorageProfile() {
    try {
        const value = sessionStorage.getItem(SESSION_STORAGE_PROFILE);
        if (value) {
            const data = JSON.parse(value);
            return data;
        }

    } catch (error) {
        console.warn('sessionStorage.getItem did not work', error.toString());
        return null;
    }
}

// removeItem(keyName) return none
function removeSessionStorageProfile() {
    try {
        sessionStorage.removeItem(SESSION_STORAGE_PROFILE);
    } catch (error) {
        console.warn('sessionStorage.removeItem did not work', error.toString());
    }
}






// digest token and output profile info
// prepare context provider for app frame
export const ProfileProvider = ({ children }) => {
    const tokenStored = localStorage.getItem('profile_session');

    const initialState = tokenStored ? tokenStored : null;






    // if token is present, verify token before loading it into context
    const [token, setToken] = useState(initialState);




    return (
        <AuthContext.Provider value={{ token, setToken }}>

            {children}
        </AuthContext.Provider>
    );




};




export default AuthContext;






// https://reactjs.org/docs/context.html#updating-context-from-a-nested-component
// you can pass a function down through the context 
// to allow consumers to update the context