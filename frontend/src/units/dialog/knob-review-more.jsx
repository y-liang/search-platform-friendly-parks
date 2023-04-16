import { useLayoutEffect, useRef } from 'react';
import styles from './styles/knob-review-more.module.css';


const KnobReviewMore = ({ alias, detail }) => {




    return (
        <div>
            <div onClick={(event) => event.target.classList.remove(alias)} className='curtain'></div>


            <div className={styles.wrapper}>
                review more
            </div>
        </div>
    );
};



export default KnobReviewMore;