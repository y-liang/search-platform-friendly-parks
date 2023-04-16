
import LogIn from '../../frames/log-in';
import styles from './styles/knob-log-in.module.css';

const KnobLogIn = ({ alias }) => {



    return (
        <>
            <div onClick={(event) => event.target.classList.remove(alias)} className='curtain'></div>
            <div className={styles.wrapper}>
                <LogIn />
            </div>
        </>
    );
};


export default KnobLogIn;