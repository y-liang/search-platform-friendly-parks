import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from 'react';

import AuthContext from '../../context/auth-context';
import Toast from '../../parts/toast';

import styles from './styles/knob-menu-share.module.css';
import useFavorite from '../../hooks/useFavorite';
import { DOMAIN_TOP_LEVEL } from '../../lib/variables';



const BASE_URL = `https://www.${DOMAIN_TOP_LEVEL}/parks/`; // if dev, localhost, for email to

const KnobMenuShare = ({ park }) => {

    const auth = useContext(AuthContext);
    const actFavorite = useFavorite();
    const [toast, setToast] = useState({ visible: false });


    // check if park favored by user if logged in 
    const [favored, setFavored] = useState(false);

    useEffect(() => {
        if (auth.token) {
            (async () => {
                // the count for user park id pair in favorites table
                const { paired } = await actFavorite.pair(park.locator_number);

                if (paired) {
                    setFavored(true);
                }
            })();
        }
    }, []);


    const handleAddFavorite = async () => {
        const message = await actFavorite.assert(park.locator_number).then(data => data.message);

        setFavored(true);

        // toggle toast visibility
        setToast({ visible: true, message: message });
        setTimeout(() => { setToast({ visible: false }); }, 3000);
    };

    const handleRemoveFavorite = async () => {
        const message = await actFavorite.remove(park.locator_number).then(data => data.message);

        setFavored(false);

        // toggle toast visibility
        setToast({ visible: true, message: message });
        setTimeout(() => { setToast({ visible: false }); }, 3000);

    };

    const handleCopyLink = () => {
        // copy to clipboard
        navigator.clipboard.writeText(`${park.park_name} - ${BASE_URL + park.locator_number}`);

        // toggle toast visibility
        setToast({ visible: true, message: 'copied link' });
        setTimeout(() => { setToast({ visible: false }); }, 3000);
    };





    return (
        <>
            <div className={`${styles.wrapper}`}>
                {auth.token ?
                    <>
                        <Link to={`/park/${park.locator_number}#review`} className={styles.item}>
                            <span className={`material-icons-round ${styles.icon}`}>edit</span>
                            leave a review
                        </Link>
                        {favored ?
                            <button onClick={handleRemoveFavorite} className={styles.item}>
                                <span className={`material-icons-round ${styles.icon}`}>remove</span>
                                remove favorite
                            </button> :
                            <button onClick={handleAddFavorite} className={styles.item}>
                                <span className={`material-icons-round ${styles.icon}`}>star</span>
                                add to favorites
                            </button>
                        }
                        <div className={styles.divider}></div>
                    </>
                    : <></>
                }
                <button onClick={handleCopyLink} className={styles.item}>
                    <span className={`material-icons-round ${styles.icon}`}>link</span>
                    copy link to share
                </button>
                <a href={`mailto:?subject=&body=${park.park_name} - ${BASE_URL + park.locator_number}`} className={styles.item}>
                    <span className={`material-icons-round ${styles.icon}`}>email</span>
                    email to a friend
                </a>
            </div>
            <div className={styles.toast}>
                <Toast visible={toast.visible} message={toast.message} />
            </div>
        </>
    );
};


export default KnobMenuShare;