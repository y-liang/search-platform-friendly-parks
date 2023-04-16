import { useContext, useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import AuthContext from '../context/auth-context';
import useAccount from '../hooks/useAccount';
import styles from './styles/account.module.css';

const PasswordForget = () => {
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

    // calls to backend account route
    const actAccount = useAccount();
    const [email, setEmail] = useState(); // email string, not an object


    /* form */

    const handleInputChange = (event) => {
        setEmail(event.target.value);
    }; // spread credentials to make a new object

    const handleSubmit = async (event) => {
        event.preventDefault();
        const result = await actAccount.forgetPassword(email);

        setMessage(result.message); // could be null
        if (result.redirect) {
            setTimeout(() => navigate(location.state?.from || '/'), 3000);
        }
    };



    return (

        <div className={styles.wrapper}>
            {!auth.token ?
                <form className={styles.section} >
                    <div className={styles.field}>
                        <label className={styles.label}>Email</label>
                        <div className={styles.control}>
                            <input className={styles.input} type='email' name='email' defaultValue={email} onChange={handleInputChange} />
                        </div>
                        {/* <p className='help is-success'>This username is available</p> */}
                    </div>

                    <div className={styles.field}>
                        <span>
                            {message ? message : null}
                        </span>
                    </div>

                    <div className={styles.field}>
                        <div className={styles.control}>
                            <button className={styles.button} type='submit' onClick={handleSubmit}>Send Password Reset Email</button>
                        </div>
                    </div>

                </form>
                : <>
                    {message}
                </>}
        </div >




    );
};


export default PasswordForget;