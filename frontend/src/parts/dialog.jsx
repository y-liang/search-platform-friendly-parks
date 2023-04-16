import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { useWindowClickAway } from '../hooks/utility/useWindow';

import styles from './styles/dialog.module.css';


/**
 * equivalent to dialog, popup, dropdown, modal
 * 
 * dialog - content of the dialog, case open metaphorically
 * alias - class name, for window clicked away, to be in dialog component as class name as well
 * icon, text - button icon or text
 * iconAlt, textAlt - button icon or text when account logged in
 * 
    <Dialog
        dialog={<KnobReviewForm alias={'review'} park={park} />}
        alias={'review'}
        button={{ type: 'text', text: 'log in or sign up to write a review', textAlt: 'write a review' }}
    />;
*/

// {
//     type: 'icon'
//     icon: '', 
// }

// {
//     type: 'text'
//     text: '', 
// }


const Dialog = ({ dialog, alias, button }) => {

    // button click visible show action
    const clickedAway = useWindowClickAway(alias); // className as argument
    const [visible, setVisible] = useState(false);
    const toggleDialogVisible = () => {
        setVisible(!visible);
    };
    useEffect(() => {
        if (clickedAway) {
            setVisible(false);
        }
    }, [clickedAway]);


    /* knob dialog remains on while clicking */
    const knobElem = useRef(null);
    useLayoutEffect(() => {
        if (alias) {
            const nodes = knobElem.current.querySelectorAll('*');
            nodes.forEach(elem => elem.classList.add(alias));
        }
    });

    return (

        <div ref={knobElem} className={styles.wrapper}>

            <button onClick={toggleDialogVisible} className={styles.button}>
                {button.type == 'icon' ?
                    <span className='material-icons-round'>
                        {visible ? 'close' : button.icon}
                    </span>
                    : <span>
                        {button.text}
                    </span>}
            </button>

            <div className={`${styles.dialog} ${visible ? styles.visible : null}`}>
                {dialog}
            </div>

            {/* till future dialog compatibility improves */}
            {/* <dialog className={styles.dialog} open={visible}>
                {dialog}
            </dialog> */}

        </div>

    );
};

// button




export default Dialog;