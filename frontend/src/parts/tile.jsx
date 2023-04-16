import { Link } from 'react-router-dom';
import KnobMenuShare from '../units/dialog/knob-menu-share';
import Dialog from './dialog';

import styles from './styles/tile.module.css';



const Tile = ({ park, onParkSelect, selected }) => {
    return (
        <div onClick={() => onParkSelect(park)}
            className={`${styles.tile} ${park == selected ? styles.selected : null}`}>

            <div>
                <div className={styles.name}>
                    {park.park_name}
                </div>
                <div className={styles.address}>
                    {park.town ? park.town : park.county}, {park.state == 'California' ? 'CA' : null} {park.zip_code}
                </div>
                <div className={styles.divider}></div>
            </div>


            <div>
                <ul className={styles.left}>
                    <li className={styles.allowed}>
                        <span className={`${styles.icon} material-icons-round`}>
                            {park.dog_allowed ? 'check_circle' : 'block'}
                        </span>

                        <span className={styles.label}>
                            {park.dog_allowed ? 'pet friendly' : 'pet not allowed'}
                        </span>
                    </li>

                    <li className={styles.friendly}>
                        <span className={`${styles.icon} material-icons-round`}>
                            pets
                        </span>
                        <span className={styles.label}>
                            {park.pet_friendly_rating ? park.pet_friendly_rating : 'not yet rated'}
                        </span>
                    </li>

                    <li className={styles.overall}>
                        <span className={`${styles.icon} material-icons-round`}>
                            star
                        </span>
                        <span className={styles.label}>
                            {park.maps_place_rating ? park.maps_place_rating : 'not yet rated'}
                        </span>
                    </li>
                </ul>

                <div className={styles.right}>


                    <Link to={`/park/${park.locator_number}`} target='_blank' rel='noopener noreferrer' className={`${styles.button} material-icons-round`}>
                        open_in_new
                    </Link>

                    <Dialog
                        dialog={<KnobMenuShare alias={'share'} park={park} />}
                        alias={'share'}
                        button={{ type: 'icon', icon: 'more_vert' }}
                    />

                </div>

            </div>
        </div>
    );
};


export default Tile;