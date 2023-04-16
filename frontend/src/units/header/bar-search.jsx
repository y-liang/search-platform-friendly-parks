import { useEffect, useState } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import styles from './styles/bar-search.module.css';

const BarSearch = ({ selected }) => {

    const navigate = useNavigate(); // no need to use navigate if using setSearchParams

    // if search term exists in url
    const [searchParams, setSearchParams] = useSearchParams();
    const existedTerm = searchParams.get('term'); // could be null

    useEffect(() => {
        if (existedTerm) {
            document.getElementById('term').value = existedTerm;
        }
    }, []); // once



    // visual
    const { value } = selected;
    const placeholder = (() => {
        switch (value) {
            case 'parks':
                return ('search for a park for your pet to roam about');
            case 'campgrounds':
                return ('search for a campground that welcomes your pet');
            case 'beaches':
                return ('search for a beach to enjoy the ocean with your pet');
            default:
                return ('search for a place to go with your pet');
        }
    })();


    // set search param and then navigate
    // only to navigate to the right url, and let the next component handle data fetch
    const [term, setTerm] = useState(null);
    const handleChange = (event) => {
        setTerm(event.target.value);
    };


    const handleSubmit = async (event) => {
        event.preventDefault();
        let page = 1;

        if (event.keyCode == 13) {
            if (!term) {
                navigate(`/parks/p${page}`);
            } else {
                // use navigate instead of setSearchParams since page path is involved
                switch (value) {
                    case 'parks':
                        navigate(`/parks/p${page}?term=${term}`);
                        break;
                    case 'beaches':
                        navigate(`/parks/p${page}?term=${term}&area=&filter=beach&sort=any`);
                        break;
                    case 'campgrounds':
                        navigate(`/parks/p${page}?term=${term}&area=&filter=campground&sort=any`);
                        break;
                    default:
                        navigate(`/parks/p${page}?term=${term}`);
                        break;
                }
            }
        }
    };




    return (
        <div className={styles.wrapper}>
            <label className={styles.bar}>
                <div className={styles.icon + ' material-icons-round'}>search</div>
                <input id='term' type='search' name='term' onKeyUp={handleSubmit} onChange={handleChange} autoComplete="off" placeholder={placeholder} className={styles.input} />
            </label>
        </div >
    );
};

export default BarSearch;