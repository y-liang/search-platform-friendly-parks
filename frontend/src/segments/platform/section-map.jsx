import { useEffect, useRef } from 'react';
import 'leaflet/dist/leaflet.css'; // do not use css module because of outside css
import styles from './styles/section-map.module.css';



/**
 *
 * map
 *
 */

const SectionMap = ({ actMap, pageParks, onParkSelect, selected }) => {

    // parks that have location only
    const locatedParks = pageParks.filter(park => park.latitude && park.longitude);



    // when map changes
    useEffect(() => {

        if (actMap.mapContainer.current) {

            if (actMap.mapInstance == null || actMap.mapContainer.current.innerText == '') {
                actMap.displayMap({
                    center: [37.16611, -119.44944],
                    zoom: 7
                });
            }
        }


        // above create a map instance and set dom element to the leaflet map class
    }, []);


    // when selected is changed or pageParks changed
    useEffect(() => {
        if (actMap.mapInstance) {
            // create all markers
            actMap.makeMarkersPopups(locatedParks, onParkSelect);
        }

        if (actMap.mapInstance && selected) {
            actMap.showSelectedMarkerPopup(selected);
        }
    }, [selected, pageParks]);


    return (
        <div className={styles.wrapper}>

            <div id='map' ref={actMap.mapContainer} className={styles.map} />

        </div>
    );
};





export default SectionMap;