import styles from './styles/bar-legal.module.css';
import favicon from '../../assets/favicon.svg';



const BarLegal = () => {
    const year = new Date().getFullYear();

    return (
        <div className={styles.wrapper} >
            <span> Copyright © {year}
                <img src={favicon} alt='wagtrail logo icon' />
                <a href='https://yliang.net/' target={'_blank'}>wagtrail creator</a>.
            </span>
            {/* <span>
                All rights reserved.
            </span> */}
        </div>);
};

export default BarLegal;