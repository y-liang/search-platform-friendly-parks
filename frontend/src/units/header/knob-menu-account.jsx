import { useContext } from 'react';

import { Link, useLocation, useNavigate } from "react-router-dom";
import useAccount from '../../hooks/useAccount';

import AuthContext from '../../context/auth-context';
import styles from './styles/knob-menu-account.module.css';


const KnobMenuAccount = () => {

    const location = useLocation();
    const navigate = useNavigate();


    const auth = useContext(AuthContext);
    const actAccount = useAccount();

    const handleLogOut = () => {
        actAccount.logOut();

        setTimeout(() => navigate('/'), 3000);
    };


    return <div className={styles.wrapper}>
        {auth.token ?
            <div>
                <Link to='/profile' className={styles.item}>Profile</Link>
                <Link to='/account/setting' className={styles.item}>Account</Link>
                <div className={styles.divider}></div>
                <button onClick={handleLogOut} className={styles.item}>Log Out</button>
            </div>
            :
            <div>
                <Link to='/account/login' state={{ from: location.pathname }} className={styles.item}>Log In</Link>
                <Link to='/account/signup' state={{ from: location.pathname }} className={styles.item}>Sign Up</Link>
                <div className={styles.divider}></div>
                <a href={`mailto:?subject=&body='Hello, check out wagtrail.dev.yliang.net to find a pet friendly park!'`} className={styles.item}>
                    <span className={`material-icons-round ${styles.icon}`}>email</span>
                    &nbsp;&nbsp;Share
                </a>
            </div>}

    </div>;

};


export default KnobMenuAccount;