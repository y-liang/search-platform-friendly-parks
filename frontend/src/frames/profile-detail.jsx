import { Link, useNavigate, useParams } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';

import useDetail from '../hooks/useDetail';
import useDate from '../hooks/utility/useDate';
import useAccount from '../hooks/useAccount';
import useOption from '../hooks/useOption';

import AuthContext from '../context/auth-context';

import ReviewSummary from '../segments/detail/review-summary';
import FormProfileDetail from '../segments/detail/form-profile-detail';
import Tile from '../parts/tile';

import styles from './styles/profile-detail.module.css';


const ProfileDetail = () => {

    // page
    let { locator } = useParams();
    locator = locator ? parseInt(locator) : null;


    // audience token if any from context, no longer needed auth context since it's handled in the backend for authorization
    // const auth = useContext(AuthContext);
    // const actAccount = useAccount();

    const actDetail = useDetail();
    const [profile, setProfile] = useState();

    const [editable, setEditable] = useState();


    const navigate = useNavigate();

    // for format date
    const actDate = useDate();


    useEffect(() => {
        (async () => {
            // locate profile to display info on page
            const result = await actDetail.locate('profile', locator); // return user data that includes email

            if (result.notfound) {
                // attn, show not found page if authorized, remove redirect below
                // setTimeout(() => navigate('/'), 3000);
                return;
            }

            // structure a few of dataDetail for display, essentials {}, pets [], favParks[]
            const { essentials, pets, audience } = result; // { essentials, pets, favParks, reviews, audience: {authenticated, authorized}  }

            // calculate pet age for each one in the array
            const tempPets = pets.map(pet => ({ ...pet, age_year: (new Date().getFullYear()) - pet.year_estimate }));

            setProfile({
                ...result,
                essentials: { ...essentials, join_month: actDate.monthYear(essentials.created_at) },
                pets: [...tempPets],
            });

        })();
    }, []);


    const toggleEdit = () => {
        setEditable(!editable);
    };

    // joined in, city, dog breed, weight, adoption/birthday date, age, reviews that contain observations and ratings 


    return (
        // <FormProfileDetail />
        <>
            {profile ?
                <>

                    <div className={styles.wrapper}>

                        <div className={styles.intro}>
                            <div className={styles.name}>
                                {profile.essentials.full_name}
                            </div>

                            {profile.audience.authorized ?
                                <div>
                                    {editable ?
                                        <button onClick={toggleEdit} className={styles.cancel}>
                                            Cancel
                                        </button> : <></>}
                                    <button onClick={toggleEdit} className={styles.edit}>
                                        {editable ? 'Save edit' : 'Edit profile'}
                                    </button>
                                </div>
                                : null}
                        </div>

                        <ul className={styles.info}>
                            <li>
                                <span className={`${styles.icon} material-icons-round`}>
                                    home
                                </span>
                                {editable ? <input type='text' /> :
                                    <span className={styles.label}>
                                        {profile.essentials.reside_in}
                                    </span>}
                                <span className={styles.total}>
                                </span>
                            </li>

                            <li>
                                <span className={`${styles.icon} material-icons-round`}>
                                    star
                                </span>
                                <span className={styles.label}>
                                    Joined in {profile.essentials.join_month}
                                </span>
                            </li>
                        </ul>
                        <div className={styles.divider}></div>
                        <h3>About</h3>
                        {editable ? <textarea /> :
                            <span className={styles.about}>{profile.essentials.about_story}</span>}

                        <div className={styles.divider}></div>
                        <h3>Who do you bring along?</h3>
                        <ul>
                            {profile.pets.map((pet, index) =>
                                <li key={index}>
                                    <span className={styles.pet}>
                                        {pet.pet_name}, a {pet.weight_size}-sized {pet.age_year} year-old {pet.breed_primary}
                                    </span>
                                </li>
                            )}
                        </ul>


                        <div className={styles.divider}></div>
                        <h3>Favorite Parks</h3>


                        <ul className={styles.favorite}>
                            {profile.favParks.map((park, index) =>
                                <Tile park={park} key={index} onParkSelect={() => { }} selected={{}} />
                            )}
                        </ul>


                        <div className={styles.divider}></div>
                        <h3>Review Summary</h3>
                        <ReviewSummary type={'park'} detail={profile} />

                    </div >
                </>
                : <></>}
        </>
    );
};


export default ProfileDetail;


/** data to display
essentials {
    id: 1,
    full_name: 'Tianyuan Shu',
    reside_in: 'Carmel, California',
    about_story: 'The "heavenly element" is the unknown variable, usually written x in modern notation.',
    created_at: 2022-03-22T22:11:55.000Z
  }
  pets [
    {
      pet_name: 'Minna',
      breed_primary: 'Australian Shepard',
      breed_secondary: 'English Sheepdog',
      weight_size: 'large',
      year_estimate: 2017
    },
    {
      pet_name: 'Minna',
      breed_primary: 'Australian Shepard',
      breed_secondary: 'English Sheepdog',
      weight_size: 'large',
      year_estimate: 2020
    }
  ]
  id 1
  parkIds [ { park_id: 3 } ]
favParks [
  {
    locator_number: 232612,
    park_name: 'Admiral William Standley State Recreation Area',
    pet_friendly_rating: null,
    area_overall_rating: null,
    dog_allowed: true,
    town: 'Branscomb',
    county: 'Mendocino County',
    state: 'California',
    zip_code: '95417'
  }
]
    
  
*/