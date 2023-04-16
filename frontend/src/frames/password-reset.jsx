import { useContext, useEffect, useState } from 'react';
import { useSearchParams, useNavigate, useLocation } from 'react-router-dom';
import AuthContext from '../context/auth-context';
import useAccount from '../hooks/useAccount';

import styles from './styles/account.module.css';

// path - if not using jwt, need email as param, account/:email/password-reset?token=<token> and const { email } = useParams no more
// with jwt, path - account/password-reset?token=<token>

const PasswordReset = () => {
    // when hitting account endpoints in backend, token being authenticated
    // context gets detects token in local storage and verifies it before loading into AppFrame.js
    const auth = useContext(AuthContext); // layout only, not for guarding routes and giving permissions
    const [message, setMessage] = useState(null);

    // route back to the previous page
    const navigate = useNavigate();
    const location = useLocation();
    useEffect(() => {
        if (auth.token) {
            setMessage('You have already logged in, if you wish to log into another account, please log out first.');
            setTimeout(() => navigate(location.state?.from || '/'), 3000); // redirect to the previous page
        }
    }, [auth]); // check when auth loaded after mounted, for all account related routes
    /** - end - block of preliminary code - above - */


    // for authentication
    const actAccount = useAccount();

    // extract token from url queries, account/password-reset?token=<token>
    const [searchParams, setSearchParams] = useSearchParams();
    let tokenParam = searchParams.get('token');

    console.log('tokenParam', tokenParam);

    const [tokenParamValid, setTokenParamValid] = useState(false);
    useEffect(() => {

        if (!tokenParam) {
            // setMessage('Unauthorized access to reset password, try logging in?'); // no need to say this, just redirect
            setTimeout(() => navigate(location.state?.from || '/account/login'), 3000); // redirect to the previous page
        }

        // replace res with data
        // check if the are authorized to reset password with button
        // (async () => {
        //     const data = await actAccount.authenticate(tokenParam);
        //     console.log('data', data);

        //     if (data?.email) {
        //         setTokenParamValid(true);
        //     } else {
        //         setTokenParamValid(false);
        //         setMessage(data?.error);
        //     }
        // })();

        // though no need to authenticate token as above
        // because the reset route is going through authenticator middle ware
        // but wanted to hit an endpoint - show fields or not - when mounting before clicking

    }, []); // bug loading url account/password-reset




    /** reset password */
    const [password, setPassword] = useState();
    const handleInputChange = (event) => {
        setPassword(event.target.value);
    }; // spread credentials to make a new object

    const handleSubmit = async (event) => {
        event.preventDefault();
        const result = await actAccount.resetPassword(tokenParam, password);

        setMessage(result.message);
        if (result.redirect) {
            setTimeout(() => navigate('/account/login'), 3000); // after reset, log in first
        }
    };

    // password field visibility setting
    const [visibility, setVisibility] = useState({ label: 'hide', type: 'password' });
    const toggleVisibility = () => {
        if (visibility.label == 'hide') {
            setVisibility({ label: 'show', type: 'text' });
        } else {
            setVisibility({ label: 'hide', type: 'password' });
        };
    };

    // existing token and token from param
    return (<>
        {!auth.token && tokenParamValid ?
            <div>

                <label>type in your new password for a....y@gmail.com below</label>
                <div className={styles.field}>
                    <label className={styles.label}>Password</label>
                    <span onClick={toggleVisibility}>{visibility.label} </span>
                    <div className={styles.control}>
                        <input className={styles.input} type={visibility.type} value={password} onChange={handleInputChange} />
                    </div>
                    {/* <p className='help is-danger'>This email is invalid</p> */}
                </div>

                <div className={styles.field}>
                    <span>
                        {message ? message : null}
                    </span>
                </div>

                <div className={styles.field}>
                    <div className={styles.control}>
                        <button className={styles.button} type='submit' onClick={handleSubmit}>Submit New Password</button>
                    </div>
                </div>


            </div>
            : <>
                {message}
            </>}
    </>);
};


export default PasswordReset;


/** 
1 - user click forget password on login page, with email address
2 - take the email address and create a JWT token with a secret, append to the url path for password reset link
3 - send to the email address with the link that contains token, path/accounts/reset-password?token=xxx
4 - link takes user from the email to path/accounts/reset-password?token=xxx
5 - when mounting password reset page, first takes the token param and send to backend for auth
6 - if authenticated, user email and token, show password reset form; if not, display ‘not authorized to reset password’
*/