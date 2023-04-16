

import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useDetail from '../hooks/useDetail';

import ReviewSummary from '../segments/detail/review-summary';
import RatingSummary from '../segments/detail/rating-summery';
import DetailMap from '../segments/detail/detail-map';

import Dialog from '../parts/dialog';
import KnobPolicySuggest from '../units/dialog/knob-policy-suggest';
import KnobStarRating from '../units/dialog/knob-star-rating';
import KnobReviewForm from '../units/dialog/knob-review-form';

import styles from './styles/park-detail.module.css';
import AuthContext from '../context/auth-context';
import KnobLogIn from '../units/dialog/knob-log-in';





const MOCK_REVIEW_TOTAL = 36;



const ParkDetail = () => {
    // page
    let { locator } = useParams();
    locator = parseInt(locator);

    // call backend
    const actDetail = useDetail();

    const [park, setPark] = useState();
    useEffect(() => {
        (async () => {
            let data = await actDetail.locate('park', locator);
            setPark(data);

            console.log('park data', data);
        })();

    }, []);


    // auth
    const auth = useContext(AuthContext);




    return (
        <>
            {park ?
                <div className={styles.wrapper}>
                    <div className={styles.name}>
                        {park.essentials.park_name}
                    </div>

                    <ul className={styles.info}>
                        <li>
                            <span className={`${ styles.icon } ${ park.essentials.pet_friendly_rating ? null : styles.dim } material-icons-round`}>
                                pets
                            </span>
                            <span className={styles.label}>
                                {park.essentials.pet_friendly_rating ? '4.5' : '4.5'}
                            </span>
                            <span className={styles.total}>
                                &nbsp;•&nbsp;{MOCK_REVIEW_TOTAL} reviews
                            </span>
                        </li>

                        <li>
                            <span className={`${ styles.icon } material-icons-round`}>
                                star
                            </span>
                            <span className={styles.label}>
                                {park.essentials.maps_place_rating ? park.essentials.maps_place_rating : '-'}
                            </span>
                        </li>

                        <li className={styles.address}>
                            <span className={styles.label}>
                                {park.essentials.town ? park.essentials.town : park.essentials.county}, {park.essentials.state == 'California' ? 'CA' : null} {park.essentials.zip_code}
                            </span>
                        </li>
                    </ul>

                    <div className={styles.map}>
                        <DetailMap park={park.essentials} />
                    </div>

                    {/* {park.audience.authenticated ? 'authenticated!!!' : 'not authenticated!!!'} */}
                    <div className={styles.share}>
                        <button>
                            <span className={`${ styles.icon } material-icons-round`}>
                                favorite
                            </span>
                            <span className={styles.label}>
                                add to favorites
                            </span>
                        </button>

                        <button>
                            <span className={`${ styles.icon } material-icons-round`}>
                                draw
                            </span>
                            <span className={styles.label}>
                                leave a review
                            </span>
                        </button>

                        <button>
                            <span className={`${ styles.icon } material-icons-round`}>
                                copy
                            </span>
                            <span className={styles.label}>
                                copy link to share
                            </span>
                        </button>

                        <button>
                            <span className={`${ styles.icon } material-icons-round`}>
                                mail
                            </span>
                            <span className={styles.label}>
                                email to a friend
                            </span>
                        </button>


                    </div>

                    <div className={styles.external}>
                        <div>
                            <span className={`${ styles.icon } material-icons-round`}>
                                place
                            </span>
                            <span className={styles.label}>
                                {park.essentials.full_address}
                            </span>
                        </div>
                        <div>
                            <a href={park.essentials.organization_website} target='_blank'>
                                <span className={`${ styles.icon } material-icons-round`}>
                                    public
                                </span>
                                <span className={styles.label}>
                                    official website
                                </span>
                            </a>
                            <a href={park.essentials.maps_url} target='_blank'>
                                <span className={`${ styles.icon } material-icons-round`}>
                                    map
                                </span>
                                <span className={styles.label}>
                                    direction in maps
                                </span>
                            </a>
                        </div>
                    </div>

                    <div className={styles.divider}></div>

                    <div className={styles.title}>

                        <h3>Where is pet allowed to?</h3>
                        <div className={styles.present}>
                            <Dialog
                                dialog={
                                    auth.token ?
                                        <KnobPolicySuggest park={park} alias={'policy'} />
                                        : <KnobLogIn alias={'login'} />
                                }
                                alias={auth.token ? 'policy' : 'login'}
                                button={{ type: 'text', text: auth.token ? 'Suggest an edit' : 'Log in to suggest an edit' }}
                            />
                        </div>
                    </div>

                    <div className={styles.friendly}>
                        <div className={styles.allowed}>
                            <span className={`${ styles.icon } material-icons-round`}>
                                {park.essentials.dog_allowed ? 'check_circle' : 'block'}
                            </span>
                            <span className={styles.label}>
                                in park
                            </span>
                            <span className={styles.policy}>
                                &nbsp;•&nbsp;{park.essentials.dog_policy ? park.essentials.dog_policy : 'Check on the official website for more details'}
                            </span>
                        </div>
                        <ul className={styles.criteria}>
                            <li>
                                <span className={`${ styles.icon } material-icons-round`}>
                                    {park.essentials.dog_on_road ? 'check_circle' : 'block'}
                                </span>
                                <span className={styles.label}>
                                    on road
                                </span>
                            </li>

                            <li>
                                <span className={`${ styles.icon } material-icons-round`}>
                                    {park.essentials.dog_on_trail ? 'check_circle' : 'block'}
                                </span>
                                <span className={styles.label}>
                                    on trail
                                </span>
                            </li>

                            <li>
                                <span className={`${ styles.icon } material-icons-round`}>
                                    {park.essentials.dog_on_beach ? 'check_circle' : 'block'}
                                </span>
                                <span className={styles.label}>
                                    on beach
                                </span>
                            </li>

                            <li>
                                <span className={`${ styles.icon } material-icons-round`}>
                                    {park.essentials.dog_in_campground ? 'check_circle' : 'block'}
                                </span>
                                <span className={styles.label}>
                                    in campground
                                </span>
                            </li>
                        </ul>
                    </div>


                    <div className={styles.divider}></div>
                    <div className={styles.title}>
                        <h3>Rating Summary</h3>
                        <div className={styles.present}>
                            <Dialog
                                dialog={
                                    auth.token ?
                                        <KnobStarRating park={park} alias={'rating'} />
                                        : <KnobLogIn alias={'login'} />
                                }
                                alias={auth.token ? 'rating' : 'login'}
                                button={{ type: 'text', text: auth.token ? 'give a rating' : 'Log in to give a rating' }}
                            />
                        </div>
                    </div>

                    <RatingSummary park={park} />

                    <div className={styles.divider}></div>

                    <div className={styles.title}>
                        <h3>Review Summary</h3>
                        <div className={styles.present}>
                            <Dialog
                                dialog={
                                    auth.token ?
                                        < KnobReviewForm alias={'review'} park={park} />
                                        : <KnobLogIn alias={'login'} />
                                }
                                alias={auth.token ? 'review' : 'login'}
                                button={{ type: 'text', text: auth.token ? 'write a review' : 'Log in to write a review' }}
                            />
                        </div>
                    </div>

                    <ReviewSummary type={'profile'} detail={park} />
                </div>

                : <></>}
        </>
    );
};





export default ParkDetail;

