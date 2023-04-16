import styles from './styles/bar-directory.module.css';


const BarDirectory = () => {

    return (
        <ul className={styles.wrapper}>
            <li><a>Terms of Service</a><a>Privacy Policy</a></li>
            <li>&middot;</li>
            <li><a>Settings</a><a>Help</a></li>
            <li>&middot;</li>
            <li><a>Contact</a><a>About</a></li>
            <li></li>
        </ul>
    );
};

export default BarDirectory;