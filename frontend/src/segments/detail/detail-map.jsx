import { useEffect } from 'react';
import useMap from '../../hooks/utility/useMap';

import styles from './styles/detail-map.module.css';


const DetailMap = ({ park }) => {

    // map
    const actMap = useMap();



    // when map changes
    useEffect(() => {
        // above create a map instance and set dom element to the leaflet map class

        console.log('actMap.mapRef', actMap.mapRef);


        if (actMap.mapRef !== undefined && actMap.mapRef.current) {
            if (actMap.mapInstance == null || actMap.mapRef.current.innerText == '') {
                actMap.displayMap({
                    center: [park.latitude, park.longitude],
                    zoom: 9
                });
            }
        }
    }, []);


    // when selected is changed or pageParks changed
    useEffect(() => {
        if (actMap.mapInstance) {
            // create all markers
            actMap.makeMarkersPopups([park], () => {});
        }

        if (actMap.mapInstance) {
            actMap.showSelectedMarkerPopup(park);
        }
    }, [park, actMap.mapInstance]);



    return (
        <div className={styles.wrapper}>

            <div id='map' ref={actMap.mapRef} className={styles.map} />

        </div>
    );
};



export default DetailMap;