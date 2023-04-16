import styles from './styles/rating-summery.module.css';

const MOCK_PARK_RATING_FRIENDLY = [120, 3, 6, 30, 24, 57]; // total, number of reviews for 1, 2, 3, 4, 5
const MOCK_PARK_RATING_OVERALL = [150, 9, 0, 36, 24, 81];

const RatingSummery = ({ park }) => {

    return (
        <div className={styles.wrapper}>
            <div>
                <div className={styles.half}>
                    <div>
                        <span className={`${styles.icon} material-icons-round`}>
                            pets
                        </span>
                        <span className={styles.subtitle}>pet friendliness</span>
                        <span className={styles.total}>{MOCK_PARK_RATING_FRIENDLY[0]} ratings</span>
                        <span>
                            {/* {park.essentials.pet_friendly_rating ? park.essentials.pet_friendly_rating : null} */}
                        </span>
                    </div>
                    <ul>
                        {MOCK_PARK_RATING_FRIENDLY.map((value, index) =>
                            <li key={index}>
                                <span className={styles.label}>{index}</span>
                                <div className={styles.meter}>
                                    <div className={styles.amount} style={{ paddingLeft: `${(value / MOCK_PARK_RATING_FRIENDLY[0]) * 100 + 1.5}%` }}></div>
                                </div>
                            </li>
                        ).slice(1, 6).reverse()}
                    </ul>
                </div>

                <div className={styles.half}>
                    <div>
                        <span className={`${styles.icon} material-icons-round`}>
                            star
                        </span>
                        <span className={styles.subtitle}>area overall</span>
                        <span className={styles.total}>{MOCK_PARK_RATING_OVERALL[0]} ratings</span>
                        <span>
                            {park.maps_place_rating ? park.maps_place_rating : null}
                        </span>
                    </div>
                    <ul>
                        {MOCK_PARK_RATING_OVERALL.map((value, index) =>
                            <li key={index}>
                                <span className={styles.label}>{index}</span>
                                <div className={styles.meter}>
                                    <div className={styles.amount} style={{ paddingLeft: `${(value / MOCK_PARK_RATING_OVERALL[0]) * 100 + 1.5}%` }}></div>
                                </div>
                            </li>
                        ).slice(1, 6).reverse()}
                    </ul>
                </div>
            </div>
        </div>
    );
};




export default RatingSummery;



