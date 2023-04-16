import { useEffect, useState } from 'react';



const initialState = (() => {
    const { innerWidth: width, innerHeight: height } = window;
    return { width, height };
})();

// mobile view
export const useWindowSize = () => {
    const [size, setSize] = useState(initialState);

    useEffect(() => {
        const handleResize = () => {
            const { innerWidth: width, innerHeight: height } = window;
            setSize({ width, height });
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);


    return { ...size };
};


// dialog element className as argument, anything that pops up is a dialog, toggle visibility, class name as alias
export const useWindowClickAway = (elemClassName) => {
    const [clickedAway, setClickedAway] = useState(false);
    useEffect(() => {
        const handleClickAway = (event) => {
            if (!event.target.className.includes(elemClassName)) {
                setClickedAway(true);
            } else {
                setClickedAway(false);
            }
        };

        window.addEventListener('click', handleClickAway);
        return () => window.removeEventListener('click', handleClickAway);
    }, []);

    return clickedAway; //boolean
};


