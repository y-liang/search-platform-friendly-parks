
import { useContext, useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import AuthContext from '../../context/auth-context';
import useReview from '../../hooks/usePresent';
import styles from './styles/knob-policy-suggest.module.css';

// suggestion, rating, and review are all in useReview, reviews

/**
 * form data
 * key 0 on road, 1 on trail, 2 on beach, 3 in campground
 * value 0 null not exist, 1 false not allowed, 2 true allowed
 */
const KnobPolicySuggest = ({ alias }) => {
    // park locator, from page route param
    let { locator } = useParams();
    locator = parseInt(locator);

    // user token, from context
    const auth = useContext(AuthContext);

    // form data
    const [suggestions, setSuggestions] = useState({});

    // decode key and value types in the state object, label each set of radios, and send form data
    const categorize = (type, index) => {
        if (type == 'key') { // key
            switch (index) {
                case 0:
                    return 'on road';
                case 1:
                    return 'on trail';
                case 2:
                    return 'on beach';
                case 3:
                    return 'in campground';

                default:
                    break;
            }
        } else { // value
            switch (index) {
                case 0:
                    return null;
                case 1:
                    return false;
                case 2:
                    return true;

                default:
                    break;
            }

        }
    };



    // send to backend
    const actReview = useReview();

    const handleSubmit = async (event) => {
        event.preventDefault();
        const road = categorize('value', suggestions[0]);
        const trail = categorize('value', suggestions[1]);
        const beach = categorize('value', suggestions[2]);
        const campground = categorize('value', suggestions[3]);

        const content = { road, trail, beach, campground };

        const data = await actReview.suggest(locator, content);




    };



    return (
        <div>
            <div onClick={(event) => event.target.classList.remove(alias)} className='curtain'></div>
            <form className={styles.wrapper}>
                {Array(4).fill(0).map((_, index) =>
                    <fieldset key={index}>
                        <legend>Pet {categorize('key', index)}</legend>
                        <label>
                            <input type="radio" value={2}
                                onChange={() => setSuggestions({ ...suggestions, [index]: 2 })}
                                checked={suggestions[index] == 2} />
                            <span>   allowed</span>
                        </label>
                        <label>
                            <input type="radio" value={1}
                                onChange={() => setSuggestions({ ...suggestions, [index]: 1 })}
                                checked={suggestions[index] == 1} />
                            <span>  not allowed</span>
                        </label>

                        <label>
                            <input type="radio" value={0}
                                onChange={() => setSuggestions({ ...suggestions, [index]: 0 })}
                                checked={suggestions[index] == 0} />
                            <span> not exist</span>
                        </label>
                    </fieldset>
                )}



                <button type='button' onClick={(event) => event.target.classList.remove(alias)}>Cancel</button>
                <button type='submit' onClick={handleSubmit}>Submit</button>

            </form>

        </div>
    );
};


export default KnobPolicySuggest;