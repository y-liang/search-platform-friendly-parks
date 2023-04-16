import { Client } from "@googlemaps/google-maps-services-js";
import { createDataFile } from '../../utilities/createDataFile.js';
import { PARKS_IDS_ALL, PARKS_IDS_ONE, PARKS_IDS_THREE } from '../info-parks/feed-to-api/allParksIds.js';
import { GOOGLE_MAPS_API_KEY } from '../../utilities/environmental.js';



const API_KEY = GOOGLE_MAPS_API_KEY;

/* parks ids locally stored */
const parksIds = PARKS_IDS_ALL;
// const parksIds = PARKS_IDS_ONE;
// const parksIds = PARKS_IDS_THREE;


/* one park */
const restructureDetails = (result) => {
    // restructure data, always || {} in case undefined or null
    const {
        address_components,
        formatted_address: park_address,
        geometry,
        international_phone_number: park_phone,
        name: park_name_alt,
        plus_code,
        rating: googlemaps_place_rating,
        user_ratings_total: googlemaps_place_ratings_total,
        url: googlemaps_url,
        utc_offset: park_utc_offset
    } = result || {};



    // have to reverse the array to use rest spread in destructuring; street may have multiple lines hence objects, need to spread last 
    const [zipcode, country, state, county, town, ...street] = [...address_components].reverse();

    const park_address_town = town ? town.long_name : null;
    const park_address_county = county ? county.long_name : null;
    const park_address_state = state ? state.long_name : null;
    const park_address_country = country ? country.long_name : null;
    const park_address_zipcode = zipcode ? zipcode.long_name : null;

    const geoTemp = { ...geometry, ...plus_code };
    const { location, global_code: googlemaps_plus_code } = geoTemp || {}; // geoTemp is there because it's made
    const { lat: park_latitude, lng: park_longitude } = location ? location : {} || {}; // unsure if location is there or not

    const details = {
        park_address_town,
        park_address_county,
        park_address_state,
        park_address_country,
        park_address_zipcode,
        // park_address,
        // park_phone,
        // park_latitude,
        // park_longitude,
        // park_name_alt,
        // googlemaps_plus_code,
        // googlemaps_place_rating,
        googlemaps_place_ratings_total,
        // googlemaps_url,
        // park_utc_offset
    };

    return details;
};


// doc https://googlemaps.github.io/google-maps-services-js/classes/Client.html
const client = new Client({});

// all ids and details
const getPlacesDetails = async () => {
    let hasError = false;
    let allParksDetails = [];

    let parkIndex = 0;
    let parksLength = parksIds.length;

    if (hasError) { return; }

    // looping all ids, when over limit, delay, go back one index and add one in length before proceeding
    for (let i = 0; i < parksLength; i++) {
        const park = parksIds[parkIndex];

        const res = await client.placeDetails({
            params: {
                place_id: park.googlemaps_place_id,
                key: API_KEY
            },
            timeout: 10000,
        });

        if (res.status == 200) {
            parkIndex++;
            const details = restructureDetails(res.data.result);

            allParksDetails.push({ ...park, ...details });
        } else if (res.status > 200) {
            parkIndex--;
            parksLength++;
            setTimeout(() => { console.log('delay for query limit'); }, 9000);
        } else {
            hasError = true;
        }


    }

    return allParksDetails;
};

export const storeDetails = () => {
    (getPlacesDetails()).then(values => createDataFile('placesdetails', values));
};

storeDetails();