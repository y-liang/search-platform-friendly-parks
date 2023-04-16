import styles from './styles/toast.module.css';


/**
 * equivalent to snackbar, alert, confirming action completed
 * 
 * visible - toggle when to appear
 * message - message after the action
 * 
    <Toast
        visible={toast.visible}
        message={toast.message} 
    />;
 */

const Toast = ({ visible, message }) => {
    return (
        <div className={`${styles.wrapper} ${visible ? styles.visible : null}`}>
            <span> {message} </span>
        </div>
    );

};

export default Toast;