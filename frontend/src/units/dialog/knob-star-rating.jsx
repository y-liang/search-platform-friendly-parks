import { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import AuthContext from '../../context/auth-context';
import useReview from '../../hooks/usePresent';

import styles from './styles/knob-star-rating.module.css';

/**
 * form data
 * key 0 on road, 1 on trail, 2 on beach, 3 in campground, 4 pet friendly, 5 area overall
 * value 1, 2, 3, 4, 5
 */
const StarRating = ({ ratingValue, setRatingValue }) => {
    return (
        <div>
            {Array(5).fill(0).map((_, index) => (
                <label key={index} className={`${index <= ratingValue ? styles.lighten : styles.dim} material-icons-round`}>
                    <input type='radio'
                        onChange={() => setRatingValue(index)}
                        value={ratingValue}
                        checked={index === ratingValue}
                    />
                    star
                </label>
            ))}
        </div>
    );
};

const KnobStarRating = ({ alias }) => {
    // park locator, from page route param
    let { locator } = useParams();
    locator = parseInt(locator);

    // user token, from context
    const auth = useContext(AuthContext);

    // form data
    const [ratings, setRatings] = useState({});


    // send to backend
    const actReview = useReview();

    const handleSubmit = async (event) => {
        event.preventDefault();
        const road = ratings[0] + 1;
        const trail = ratings[1] + 1;
        const beach = ratings[2] + 1;
        const campground = ratings[3] + 1;
        const friendly = ratings[4] + 1;
        const overall = ratings[5] + 1;

        const content = { road, trail, beach, campground, friendly, overall };

        const data = await actReview.rate(locator, content);




    };

    const categorize = (index) => {
        switch (index) {
            case 0:
                return 'on road';
            case 1:
                return 'on trail';
            case 2:
                return 'on beach';
            case 3:
                return 'in campground';
            case 4:
                return 'pet friendly';
            case 5:
                return 'area overall';

            default:
                break;
        }
    };


    return (
        <div>
            <div onClick={(event) => event.target.classList.remove(alias)} className='curtain'></div>

            <form className={styles.wrapper}>
                {Array(6).fill(0).map((_, index) =>
                    <fieldset key={index} >
                        <legend>{categorize(index)}</legend>
                        <StarRating alias={alias}
                            setRatingValue={(val) => setRatings({ ...ratings, [index]: val })}
                            ratingValue={ratings[index]} />
                    </fieldset>
                )}




                <button type='button' onClick={(event) => event.target.classList.remove(alias)}>Cancel</button>
                <button type='submit' onClick={handleSubmit}>Submit</button>
            </form>
        </div>
    );
};


export default KnobStarRating;
