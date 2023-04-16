import { useContext, useEffect, useLayoutEffect, profileef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import AuthContext from '../../context/auth-context';
import useAccount from '../../hooks/useAccount';
import useDetail from '../../hooks/useDetail';
import styles from './styles/knob-review-form.module.css';

// suggest an edit if the policy is not up to date

const KnobReviewForm = ({ alias, park }) => {

    // // for previous location in router link state
    const location = useLocation();


    // find authenticated profile from context
    const auth = useContext(AuthContext);



    // token from context to get profile info
    const [profile, setProfile] = useState();

    useEffect(() => {

    });






    // for calendar default and max value
    const today = new Date().toISOString().split('T')[0]; // 2022-03-27



    // retrieve profile essentials from database by locator
    // const actDetail = useDetail();

    // form state
    const [state, setState] = useState({

    });




    // handle input change and submit






    return (
        <div>
            <div onClick={(event) => event.target.classList.remove(alias)} className='curtain'></div>
            <div className={styles.wrapper}>
                <h3>
                    {park.essentials.park_name}
                </h3>

                <h4>
                    {profile?.essentials.full_name}
                </h4>

                <span>posting review publicly</span>


                <form>
                    <fieldset>
                        <legend>details of visit</legend>
                        {/* optional pick one of the preset dogs entered under profile info, or other */}
                        <label>
                            visited date:
                            <input type='date' defaultValue={today} min='2000-01-01' max={today} />
                        </label>
                        <br />

                        {profile && profile.pets[0] ?
                            profile.pets.map((pet, index) =>
                                <label key={index}>
                                    visited with your pet:
                                    {pet.pet_name}
                                    <input type='checkbox' />
                                </label>
                            ) : <></>}
                    </fieldset>

                    <fieldset>
                        <legend>Share your experience</legend>
                        <textarea></textarea>

                    </fieldset>

                    <button type='button' onClick={(event) => event.target.classList.remove(alias)}>Cancel</button>
                    <button type='submit'>Submit</button>
                </form>
            </div>



        </div>
    );
};



export default KnobReviewForm;