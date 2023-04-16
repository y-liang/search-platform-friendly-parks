import { useState } from 'react';

import BarSearch from './bar-search';
import styles from './styles/bar-menu.module.css';
import { Link } from 'react-router-dom';

const BarMenu = () => {


    const [selected, setSelected] = useState({ value: 'parks' });

    // if these three categories changed, update BarMenu.js, BarSearch.js, Cover.js accordingly
    // use classnames as identifier for event target, hence there is a mix with css module
    const handleSelectedChange = (e) => {

        switch (e.target.className.split(' ')[0]) {
            case 'parks':
                setSelected({ value: 'parks' });
                break;

            case 'campgrounds':
                setSelected({ value: 'campgrounds' });
                break;

            case 'beaches':
                setSelected({ value: 'beaches' });
                break;

            default:
                break;
        }

    };


    return (
        <div className={styles.wrapper}>
            <ul className={styles.labels}>

                <li onClick={handleSelectedChange} className={`parks ${selected.value == 'parks' ? styles.underscored : null}`}>
                    <span className={`parks material-icons-round ${styles.icon}`}>
                        forest
                    </span>
                    <span className='parks'>Parks</span>
                    <span className='parks'>&nbsp;to Roam</span>
                    <div className='parks'></div>
                </li>


                <li onClick={handleSelectedChange} className={`beaches ${selected.value == 'beaches' ? styles.underscored : null}`}>
                    <span className={`beaches material-icons-round ${styles.icon}`}>
                        beach_access
                    </span>
                    <span className='beaches'>Beaches</span>
                    <div className='beaches'></div>
                </li>

                <li onClick={handleSelectedChange} className={`campgrounds ${selected.value == 'campgrounds' ? styles.underscored : null}`}>
                    <span className={`campgrounds material-icons-round ${styles.icon}`}>
                        cottage
                    </span>
                    <span className='campgrounds'>Campgrounds</span>
                    <div className='campgrounds'></div>
                </li>

            </ul>

            <BarSearch selected={selected} />

            <ul className={styles.suggestions}>
                <li>
                    <span>
                        try searching...
                    </span>
                </li>
                <li>
                    <Link to='/parks/p1?term=valley'>
                        <span className={styles.icon + ' material-icons-round'}>landscape</span>
                        <span>valley</span>
                    </Link>
                </li>
                <li>
                    <Link to='/parks/p1?term=redwood'>
                        <span className={styles.icon + ' material-icons-round'}>park</span>
                        <span>redwood</span>
                    </Link>
                </li>
                <li>
                    <Link to='/parks/p1?term=lake'>
                        <span className={styles.icon + ' material-icons-round'}>water</span>
                        <span>lake</span>
                    </Link>
                </li>


                <li>
                    <Link to='/parks/p1'>
                        <span className={styles.icon + ' material-icons-round'}>place</span>
                        <span>anywhere</span>
                    </Link>
                </li>
            </ul>
        </div >
    );
};


export default BarMenu;