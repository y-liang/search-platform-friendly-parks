import { useContext, useEffect, useState } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';

import AuthContext from '../context/auth-context';
import useAccount from '../hooks/useAccount';
import styles from './styles/account.module.css';

const LogIn = () => {
    // when hitting account endpoints in backend, token being authenticated
    // context gets detects token in local storage and verifies it before loading into AppFrame.js
    const auth = useContext(AuthContext); // layout only, not for guarding routes and giving permissions
    const [message, setMessage] = useState(null);

    const [reminder, setReminder] = useState(null);

    // route back to the previous page
    const navigate = useNavigate();
    const location = useLocation();
    useEffect(() => {
        if (auth.token) {
            setReminder('You have already logged in.');
            setTimeout(() => navigate(location.state?.from || '/'), 3000); // redirect to the previous page
        }
    }, [auth.token]); // check when auth loaded after mounted, for all account related routes
    /** - end - block of preliminary code - above - */

    // calls to backend account route
    const actAccount = useAccount();
    const [fields, setFields] = useState({
        email: '',
        password: '',
    });


    /* form */
    const { email, password } = fields;
    const handleInputChange = (event) => {
        setFields({ ...fields, [event.target.name]: event.target.value });
    }; // spread fields to make a new object

    const handleSubmit = async (event) => {
        event.preventDefault();
        const result = await actAccount.logIn(fields);

        setMessage(result.message);
        if (result.redirect) {
            setTimeout(() => navigate(location.state?.from || '/'), 3000);
        }
    };

    // password field visibility setting
    const [visibility, setVisibility] = useState({ label: 'hide password', type: 'password' });
    const toggleVisibility = (event) => {
        event.preventDefault();
        if (visibility.type == 'password') {
            setVisibility({ label: 'show password', type: 'text' });
        } else {
            setVisibility({ label: 'hide password', type: 'password' });
        };
    };



    return (

        <div className={styles.wrapper}>
            {!auth.token ?
                <form>
                    <h3>Log in with your account</h3>
                    <fieldset>
                        <legend>Email</legend>
                        <input type='email' name='email'
                            autoComplete='email'
                            value={email} onChange={handleInputChange}
                            placeholder='Enter an email' />
                    </fieldset>

                    <fieldset>
                        <legend>Password</legend>
                        <input type={visibility.type} name='password'
                            autoComplete='current-password'
                            value={password} onChange={handleInputChange}
                            placeholder='Enter a password' />
                    </fieldset>

                    <div className={styles.row}>
                        <button onClick={toggleVisibility} className={styles.toggle} >
                            <span className='material-icons-round'>
                                {visibility.type == 'password' ? 'visibility_off' : 'visibility'}
                            </span>
                            {visibility.label}
                        </button>
                        <Link to='/account/password-forget' className={styles.forget}>Forget password?</Link>
                        <Link to='/account/signup' state={{ from: location.pathname }} className={styles.instead}>Sign up instead?</Link>
                    </div>

                    <div className={styles.row}>
                        <span className={styles.message}>{message ? message : null}&nbsp;</span>
                        <button type='submit' onClick={handleSubmit} className={styles.submit}>Log In</button>
                    </div>

                </form> :
                <div className={styles.reminder}>
                    {message || reminder}
                </div>
            }
        </div >




    );
};


export default LogIn;