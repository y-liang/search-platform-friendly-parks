import styles from './styles/cover.module.css';
import parkOptionA from '../assets/covercards/parkoptiona.png';
import parkOptionB from '../assets/covercards/parkoptionb.png';
import parkOptionC from '../assets/covercards/parkoptionc.png';
import parkOptionD from '../assets/covercards/parkoptiond.png';
import parkOptionE from '../assets/covercards/parkoptione.png';
import beachOptionA from '../assets/covercards/beachoptiona.png';
import beachOptionB from '../assets/covercards/beachoptionb.png';
import beachOptionC from '../assets/covercards/beachoptionc.png';
import { Link } from 'react-router-dom';


const Cover = () => {

    return (
        <div className={styles.wrapper}>

            <div className={styles.top}>
                <div className={styles.left}>
                    <span className={styles.icon + ' material-icons-round'}>
                        gesture
                    </span>
                    <span className={styles.icon + ' material-icons-round'}>
                        stream
                    </span>

                    <span className={styles.icon + ' material-icons-round'}>
                        star
                    </span>
                </div>
                <div className={styles.middle}>
                    <h3>Take your pet to a nearby friendly state park to run, play, and camp!</h3>
                    <h1>...</h1>
                    <p>A pet friendly network where you can discover where to bring your pets and connect with other people and their pets on places and adventures.</p>
                    <Link to='/parks/p1'>Browse Parks</Link>
                    {/* <img src={beachOptionA} /> */}
                </div>
                <div className={styles.right}>
                    <span className={styles.icon + ' material-icons-round'}>
                        waves
                    </span>
                    <span className={styles.icon + ' material-icons-round'}>
                        bolt
                    </span>
                    <span className={styles.icon + ' material-icons-round'}>
                        tag
                    </span>
                </div>
            </div>
            <ul className={styles.fourCols}>

                <li>
                    <Link to='/parks/p1?term=lake'>
                        <img src={beachOptionC} />
                    </Link>
                    <span>lake</span>
                </li>
                <li>
                    <Link to='/parks/p1?filter=beach'>
                        <img src={beachOptionB} />
                    </Link>
                    <span>beach</span>
                </li>

                <li>
                    <Link to='parks/p1?term=valley'>
                        <img src={parkOptionE} />
                    </Link>
                    <span>valley</span>
                </li>
                <li>
                    <Link to='/parks/p1?filter=trail'>
                        <img src={parkOptionC} />
                    </Link>
                    <span>trail</span>
                </li>

            </ul>
            <ul className={styles.twoCols}>
                <li>
                    <span>To be <br /> near a creek</span>
                    <Link to='parks/p1?term=creek'>
                        <img src={parkOptionA} />
                    </Link>
                </li>

                <li>
                    <Link to='parks/p1?term=redwood'>
                        <img src={parkOptionB} />
                    </Link>
                    <span>To be <br /> in the woods</span>
                </li>

            </ul>

            {/* <div className={styles.bottom}>
                <img src={parkOptionD} />
            </div> */}
        </div>




    );

};

export default Cover;