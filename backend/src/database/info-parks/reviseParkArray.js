import { PARKS_DETAILS } from './allParksDetails.js'; // update this to the latest accordingly
import { PARKS_EXTERNAL_TABLE_ROWS } from './parksExternalTableRows.js';
import { PARKS_INFORMATION_TABLE_ROWS } from './parksInformationTableRows.js';
import { PARKS_TABLE_ROWS } from './parksTableRows.js';

// add locator number to each park details
const addLocatorOnePark = (park, index) => {
    let locator_number = 20210106 + index;
    return { locator_number, ...park };
};



// vertical partition, column split, into three tables
const partitionDetailsOnePark = (park, table) => {

    const {
        locator_number,
        park_name,
        dog_allowed,
        dog_policy,
        pet_friendly_rating,
        area_overall_rating,
        dog_on_road,
        dog_on_trail,
        dog_on_beach,
        dog_in_campground,
        town,
        county,
        state,
        country,
        zip_code,
        full_address,
        phone_number,
        latitude,
        longitude,
        organization_website,
        maps_place_name,
        maps_place_id,
        maps_plus_code,
        maps_place_rating,
        maps_place_ratings_total,
        maps_url
    } = park;

    switch (table) {
        case 'park':

            return {
                locator_number,
                park_name,
                dog_on_road,
                dog_on_trail,
                dog_on_beach,
                dog_in_campground,
                pet_friendly_rating,
                area_overall_rating,
                latitude,
                longitude,
            };
        case 'information':
            return {
                locator_number,
                park_name,
                full_address,
                phone_number,
                organization_website,
                dog_allowed,
                dog_policy,
                town,
                county,
                state,
                zip_code,
                country,
            };


        case 'external':

            return {
                locator_number,
                park_name,
                maps_place_name,
                maps_place_id,
                maps_plus_code,
                maps_place_rating,
                maps_place_ratings_total,
                maps_url
            };

        default:
            break;
    }
};
// export let allParksArray = PARKS_DETAILS.map((park, index) => addLocatorOnePark(park, index));

// export let allParksParksArray = PARKS_DETAILS.map((park) => partitionDetailsOnePark(park, 'park'));
// export let allParksInformationArray = PARKS_DETAILS.map((park) => partitionDetailsOnePark(park, 'information'));
// export let allParksExternalArray = PARKS_DETAILS.map((park) => partitionDetailsOnePark(park, 'external'));



// change locator in all files
const changeLocator = (park) => {
    let { locator_number } = park;
    locator_number = locator_number - 19977494;
    return { ...park, locator_number };
};

// export let allParksArray = PARKS_DETAILS.map(changeLocator);
// export let allParksParksArray = PARKS_EXTERNAL_TABLE_ROWS.map(changeLocator);
// export let allParksInformationArray = PARKS_INFORMATION_TABLE_ROWS.map(changeLocator);
// export let allParksExternalArray = PARKS_TABLE_ROWS.map(changeLocator);



// then add the following in index.js, go to local host 3001, and convert json to javascript object
// app.get('/', (req, res) => {
//     res.send(allParksArray);
// });