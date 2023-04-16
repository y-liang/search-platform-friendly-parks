import { useEffect, useState } from 'react';
import useOption from '../../hooks/useOption';
import styles from './styles/form-profile-detail.module.css';



const FormProfileDetail = () => {
    const actOption = useOption();

    /* select options - static - weight sizes */
    const [selectOptions, setSelectOptions] = useState();
    useEffect(() => {
        (async () => {
            const dataOptions = await actOption.obtain('weight_size');
            setSelectOptions({ ...selectOptions, weight_size: dataOptions });
        })();
    }, []);

    /* datalist options - dynamic - usa cities, dog breeds */
    // input for fetching data and options for display
    const [datalistOptions, setDatalistOptions] = useState(); // returned data {usa_city: [], dog_breed: []} to populate the dropdown options
    const handleInputsKeyUpChange = async (event) => {
        const dataOptions = await actOption.obtain(event.target.name, event.target.value);
        // console.log('event.target.name, event.target.value', event.target.name, event.target.value);
        // console.log('dataOptions', dataOptions);
        // console.log('{[event.target.name]: dataOptions}', { [event.target.name]: dataOptions });

        setDatalistOptions({ ...datalistOptions, [event.target.name]: dataOptions });

    }; // spread credentials to make a new object

    const [secondary, setSecondary] = useState(false);
    const toggleSecondary = () => {
        setSecondary(!secondary);
    };

    /* profile edit form */

    // const [inputs, setInputs] = useState();
    // const { email, password } = credentials;
    const handleInputChange = (event) => {
        // setInputs({ ...inputs, [event.target.name]: event.target.value });
    }; // spread credentials to make a new object

    const handleSubmit = async (event) => {
        // event.preventDefault();
        // const data = await actAccount.logIn(credentials);

        // if (data.email) {
        //     setMessage('you have already logged in previously');
        // }


        // if (data.token) {
        //     setMessage(data.message);

        //     // redirect to the previous page
        //     setTimeout(() => navigate(location.state?.from || '/'), 3000);
        // } else {
        //     setMessage(data.error);
        // }

    };




    return (
        <form className={styles.section} >
            <div className={styles.field}>
                <label htmlFor='live-in'>Live in</label>
                <input list='usa-city-options' id='live-in' name='usa_city' onKeyUp={handleInputsKeyUpChange} />

                <datalist id='usa-city-options'>
                    {datalistOptions?.usa_city?.map((value, index) => <option value={value} key={index} />)}
                </datalist>
            </div>


            <div className={styles.field}>
                <label htmlFor='breed-type'>Primary Breed</label>
                <input list='breed-type-options' id='breed-type' name='dog_breed' onKeyUp={handleInputsKeyUpChange} />


                <datalist id='breed-type-options'>
                    {datalistOptions?.dog_breed?.map((value, index) => <option value={value} key={index} />)}
                </datalist>
            </div>


            <button onClick={toggleSecondary} type='button'>
                <label htmlFor='breed-type'>Secondary Breed{secondary ? 'x' : '?'}</label>
            </button>

            <div className={`${styles.field} ${secondary ? null : styles.hidden}`}>
                {/* <label htmlFor='breed-type'>Secondary Breed</label> */}
                <input list='breed-type-options' id='breed-type' name='breed-type' />
                <datalist id='breed-type-options'>
                    {datalistOptions?.dog_breed?.map((value, index) => <option value={value} key={index} />)}
                </datalist>
            </div>


            <div className={styles.field}>
                <label htmlFor='weight-size'>Weight Size</label>
                <select id='weight-size' name='weight-size-options'>
                    {selectOptions?.weight_size?.map((entry, index) =>
                        <option value={`${Object.keys(entry)[0]}`} key={index}>
                            {Object.keys(entry)[0].charAt(0).toUpperCase() + Object.keys(entry)[0].slice(1)} &middot; {Object.values(entry)[0]}
                        </option>)}
                </select>
            </div>

            <div className={styles.field}>
                <span>
                    {/* {message ? message : null} */}
                </span>
            </div>

            <div className={styles.field}>
                <div className={styles.control}>
                    <button className={styles.button} type='submit' onClick={handleSubmit}> submit </button>
                </div>
            </div>


        </form>
    );
};



export default FormProfileDetail;