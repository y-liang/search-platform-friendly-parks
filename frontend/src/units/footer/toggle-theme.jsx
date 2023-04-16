import { useEffect, useRef, useState } from 'react';
import styles from './styles/toggle-theme.module.css';

const rootElem = document.getElementById('root');


const ToggleTheme = () => {
    const [mode, setMode] = useState(localStorage.getItem('color_mode') ? localStorage.getItem('color_mode') : 'light');
    const rootRef = useRef(rootElem);

    let nextMode = mode == 'light' ? 'dark' : 'light';

    const darkColors = `
        --color-bgd-primary: var(--color-darkest);
        --color-bgd-secondary: var(--color-darker);
        --color-bgd-tertiary: var(--color-dark);
        --color-bgd-accent: var(--color-app-medium);
        --color-txt-primary: var(--color-lightest);
        --color-txt-secondary: var(--color-lighter);
        --color-txt-tertiary: var(--color-light);
        --color-txt-accent: var(--color-app-light);
        --color-bgd-number: var(--color-darkest-number);
    `;

    const lightColors = `
        --color-bgd-primary: var(--color-lightest);
        --color-bgd-secondary: var(--color-lighter);
        --color-bgd-tertiary: var(--color-light);
        --color-bgd-accent: var(--color-app-light);
        --color-txt-primary: var(--color-darkest);
        --color-txt-secondary: var(--color-darker);
        --color-txt-tertiary: var(--color-dark);
        --color-txt-accent: var(--color-app-medium);
        --color-bgd-number: var(--color-lightest-number);
    `;

    useEffect(() => {
        localStorage.setItem('color_mode', mode);
        rootRef.current.style.cssText = mode == 'light' ? lightColors : darkColors;
    });

    const toggleMode = () => {
        setMode(nextMode);
    };

    return (
        <div className={styles.wrapper}>
            <span>{'Switch to the ' + nextMode + ' theme'}</span>
            <label className={styles.toggle}>
                <input type='checkbox' className={styles.checkbox} checked={mode == 'dark'} onChange={toggleMode} />
                <span className={styles.slider + ' ' + styles.round}></span>
            </label>
        </div>
    );
};

export default ToggleTheme;