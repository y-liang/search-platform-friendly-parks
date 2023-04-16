import dotenv from 'dotenv';
import { Client } from "@googlemaps/google-maps-services-js";
import { createDataFile } from '../utils/createDataFile.js';

import { RAW_CA_PARKS_TINY, RAW_CA_PARKS_ONE, RAW_CA_PARKS_PT_ONE, RAW_CA_PARKS_ALL } from "../raw/rawCaParks.js";
import { GOOGLE_MAPS_API_KEY } from '../../utilities/environmental.js';


dotenv.config({ path: '../.env' });

const API_KEY = GOOGLE_MAPS_API_KEY;

/* untidied park data from local */
// const rawParks = RAW_CA_PARKS_ALL; // arrays inside array
const rawParks = RAW_CA_PARKS_ONE; // testing use - one of array
// const rawParks = RAW_CA_PARKS_TINY; // testing use - portion of array



/* one park, raw form is an array, restructure parks array from raw, returns a new array with each park object */
const restructurePark = (arr) => {
    // array to object, each park
    return {
        park_name: arr[0],
        park_website: arr[1],
        park_dog_allowed: arr[2],
        park_dog_policy: arr[3],
        park_state_abbr: 'CA',
        park_is_national: false,
        googlemaps_place_id: arr[4],
    };
};



// doc https://googlemaps.github.io/google-maps-services-js/classes/Client.html
const client = new Client({});

// all ids
const getPlacesIds = async () => {
    let hasError = false; // in case other errors
    let allParksIds = [];

    // for handling over query limit issue
    let parkIndex = 0;
    let parksLength = rawParks.length;

    if (hasError) { return; }

    for (let i = 0; i < parksLength; i++) {
        const park = rawParks[parkIndex];

        const res = await client.findPlaceFromText({
            params: {
                fields: [],
                input: park[0], // place name
                inputtype: 'textquery',
                key: API_KEY,
            },
            timeout: 10000,
        });

        console.log(res.status);
        if (res.status == 200) {
            parkIndex++;
            park.push(res.data.candidates[0].place_id);
            allParksIds.push(restructurePark(park));
        } else if (res.status > 200) { // when res.data.status = 'OVER_QUERY_LIMIT' code 429
            parkIndex--;
            parksLength++;
            console.log(parkIndex);
            setTimeout(() => { console.log('delay for query limit'); }, 9000);
        } else {
            hasError = true;
        }


    }


    return allParksIds;

};

export const storeIds = () => {
    (getPlacesIds()).then(values => createDataFile('parkarray', values));
};



