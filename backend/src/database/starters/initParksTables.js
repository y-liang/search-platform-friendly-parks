import db from '../index.js';
import { PARKS_EXTERNAL_TABLE_ROWS } from '../info-parks/parksExternalTableRows.js';
import { PARKS_INFORMATION_TABLE_ROWS } from '../info-parks/parksInformationTableRows.js';
import { PARKS_TABLE_ROWS } from '../info-parks/parksTableRows.js';
import { insertIntoTable } from '../queries/insert.js';


const populateOneRowParks = async (park) => {

    const {
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
    } = park || {};

    const res = await db.query(insertIntoTable.parks, [
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
    ]);

};


const populateOneRowParksInformation = async (park) => {

    const {
        locator_number,
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
    } = park || {};

    const res = await db.query(insertIntoTable.parksInformation, [
        locator_number,
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
    ]);

};


const populateOneRowParksExternal = async (park) => {

    const {
        locator_number,
        maps_place_name,
        maps_place_id,
        maps_plus_code,
        maps_place_rating,
        maps_place_ratings_total,
        maps_url
    } = park || {};

    const res = await db.query(insertIntoTable.parksExternal, [
        locator_number,
        maps_place_name,
        maps_place_id,
        maps_plus_code,
        maps_place_rating,
        maps_place_ratings_total,
        maps_url
    ]);

};




PARKS_TABLE_ROWS.forEach(populateOneRowParks);
PARKS_INFORMATION_TABLE_ROWS.forEach(populateOneRowParksInformation);
PARKS_EXTERNAL_TABLE_ROWS.forEach(populateOneRowParksExternal);;



// then in console, node this file, cd backend/src/database/starters && node initParksTables.js
