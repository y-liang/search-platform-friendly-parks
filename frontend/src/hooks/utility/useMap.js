import { useEffect, useRef, useState } from 'react';
import leaflet, { map, marker } from 'leaflet';

import mapIconSelected from '../../assets/mapicona.svg';
import mapIconAll from '../../assets/mapiconb.svg';


const ICON_ALL = leaflet.icon({
    iconUrl: mapIconAll,
    iconSize: [24, 35],
    popupAnchor: [0, -18],
});

const ICON_SELECTED = leaflet.icon({
    iconUrl: mapIconSelected,
    iconSize: [24, 35],
    popupAnchor: [0, -18],
});


const useMap = () => {
    // leaflet map
    const mapContainer = useRef(null);

    const [state, setState] = useState({
        mapContainer: mapContainer,
        mapInstance: null,
        markers: null
    });


    // initiate a leaflet map
    const initMap = (elem, { center, zoom }) => {
        // before initializing map check for is the map is already initiated or not

        var container = leaflet.DomUtil.get('map');
        if (container != null) {
            container._leaflet_id = null;
        }

        return leaflet.map(elem.current, {
            center: center,
            zoom: zoom,
            layers: [
                leaflet.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                    maxZoom: 19,
                    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                }),
            ]
        });
    };

    // create one marker and popup event
    const makeOneMarkerPopup = (park, onParkSelect) => {
        const { latitude, longitude } = park; // no need to include || {} since it's been ensured
        const location = [parseFloat(latitude), parseFloat(longitude)];
        const marker = leaflet.marker(location, { icon: ICON_ALL });

        // change marker color on hovering
        marker.addEventListener('mouseover', () => {
            marker.bindTooltip(
                `<div style='color:rgb(81, 87, 85)'>
                ${park.dog_allowed ? 'pet friendly' : 'pet not allowed'}
                 </div>`
                , { direction: 'top' }).openTooltip();
        });

        // select a park on the map when click, show popup selected 
        marker.addEventListener('click', () => {
            onParkSelect(park);
        });



        return marker;
    };


    return {
        mapContainer: state.mapContainer,
        mapInstance: state.mapInstance,
        markers: state.markers,

        // set map state
        displayMap({ center, zoom }) {
            setState({ ...state, mapInstance: initMap(state.mapContainer, { center, zoom }) });
        },

        // create all markers with their popups
        makeMarkersPopups(parks, onParkSelect) {

            // clear existing markers from previous page if they exist
            if (state.markers) {
                state.markers.forEach(marker => marker.remove());
            }
            // create new array of markers
            const markers = parks.map(park => makeOneMarkerPopup(park, onParkSelect).addTo(state.mapInstance));
            setState({ ...state, markers });
        },

        // triggered when a selected is defined, either from map or from list
        // change marker icon and show popup info
        showSelectedMarkerPopup(selected) {


            const { latitude, longitude } = selected; // no need to include || {} since it's been ensured
            const location = [parseFloat(latitude), parseFloat(longitude)];

            const marker = leaflet.marker(location, { icon: ICON_SELECTED }).addTo(state.mapInstance);     // todo - remove old marker, create/change marker icon
            const popupInfo = leaflet.popup().setContent(
                `<a href='/park/${selected.locator_number}' style='color:rgb(0, 127, 129)'>
                    ${selected.park_name}
                </a>`
            );

            // show popup
            marker.bindPopup(popupInfo).openPopup();
        },



        // map bounds
        getViewBounds() {
            return state.mapInstance.getBounds();
        }

    };
};


export default useMap;


// https://leaflet-extras.github.io/leaflet-providers/preview/


// // mobile, select a park on the map when click, show popup selected 
// marker.addEventListener('touchend', () => {
//     onParkSelect(park);
// });