

import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useDate from '../../hooks/utility/useDate';
import Dialog from '../../parts/dialog';

import KnobReviewMore from '../../units/dialog/knob-review-more';
import styles from './styles/review-summary.module.css';


// under either park or user detail page
// type - styling, user under park detail or park under profile detail, for the locator link
// detail - review content

const ReviewSummary = ({ type, detail }) => {

    // the state is an array of boolean for the toggle of review less or more
    const [entireArr, setEntireArr] = useState(detail.reviews.map(() => false));
    const toggleLessMore = (index) => {
        entireArr[index] = !entireArr[index];
        setEntireArr([...entireArr]);
    };


    const actDate = useDate();

    return (
        <div className={styles.wrapper}>
            <ul className={styles.recent}>
                {detail.reviews.map((value, index) =>
                    <li key={index}>
                        <div className={type == 'park' ? styles.park : styles.profile}>
                            <div className={styles.half}>
                                <Link to={`/${type}/${value.locator_number}`} className={styles.top}>
                                    <span>{type == 'park' ? value.park_name : value.full_name}</span>
                                </Link>
                                {value.pet_name ?
                                    <span className={styles.bottom}>
                                        with {value.pet_name}, a {value.breed_primary}
                                    </span> : <></>}
                            </div>
                            <div className={styles.half}>
                                <div className={styles.top}>
                                    <span className={`${styles.icon} material-icons-round`}>
                                        pets
                                    </span>
                                    <span className={styles.label}>
                                        {value.pet_friendly}
                                    </span>
                                    <span className={`${styles.icon} material-icons-round`}>
                                        star
                                    </span>
                                    <span className={styles.label}>
                                        {value.area_overall}
                                    </span>
                                </div>
                                <span className={styles.bottom}>
                                    {actDate.monthYear(value.visited_date)}
                                </span>
                            </div>
                        </div>
                        <div>
                            <p className={styles.content}>
                                {entireArr[index] ? value.review_content : value.review_content}
                            </p>

                            {/* limit review characters so it's not too long, toggle to show more, attn, leave out less if the same */}
                            {value.review_content !== value.review_content ?
                                <button onClick={() => toggleLessMore(index)} className={styles.button}>
                                    read {entireArr[index] ? 'less' : 'more'}
                                </button> : <></>}
                        </div>
                    </li>
                )}
            </ul>
            {/* popup for more, search and pagination for reviews */}
            <div className={styles.button}>
                <Dialog
                    dialog={<KnobReviewMore alias={'review'} detail={detail} />}
                    alias={'review'}
                    button={{ type: 'text', text: 'read more reviews' }}
                />
            </div>
        </div>
    );
};



export default ReviewSummary;



