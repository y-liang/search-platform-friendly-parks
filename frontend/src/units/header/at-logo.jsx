import { Link } from "react-router-dom";


import styles from './styles/at-logo.module.css';
import favicon from '../../assets/favicon.svg';

const AtLogo = () => (
    <Link to='/' className={styles.wrapper}>
        <img src={favicon} alt='wagtrail logo icon' />
        <h2>wagtrail</h2>
    </Link>
);

export default AtLogo;