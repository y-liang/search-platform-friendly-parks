import db from '../index.js';
import { insertIntoTable } from '../queries/insert.js';
import { updateTable } from '../queries/update.js';
import { MOCK_TABLE_PETS, MOCK_TABLE_PROFILES, MOCK_TABLE_RATINGS, MOCK_TABLE_REVIEWS } from './mock-all.js';



const enterOnePet = async (pet) => {
    const {
        profile_id,
        pet_name,
        breed_primary,
        breed_secondary,
        weight_size,
        year_estimate
    } = pet;
    await db.query(
        insertIntoTable.pets,
        [
            profile_id,
            pet_name,
            breed_primary,
            breed_secondary,
            weight_size,
            year_estimate
        ]
    );
};

const updateOneProfile = async (profile) => {
    const {
        id,
        full_name,
        reside_in,
        about_story
    } = profile;


    await db.query(
        updateTable.profiles.assert,
        [
            id,
            full_name,
            reside_in,
            about_story
        ]
    );
};


const enterOneRating = async (rating) => {

    const {
        profile_id,
        park_id,
        on_road,
        on_trail,
        on_beach,
        in_campground,
        pet_friendly,
        area_overall
    } = rating;

    await db.query(
        insertIntoTable.ratings,
        [
            profile_id,
            park_id,
            on_road,
            on_trail,
            on_beach,
            in_campground,
            pet_friendly,
            area_overall
        ]
    );
};


const enterOneReview = async (review) => {

    const {
        profile_id,
        park_id,
        review_content,
        visited_with_pet_id,
        visited_date
    } = review;

    await db.query(
        insertIntoTable.reviews,
        [
            profile_id,
            park_id,
            review_content,
            visited_with_pet_id,
            visited_date
        ]
    );
};


// MOCK_TABLE_PETS.forEach(enterOnePet);
// MOCK_TABLE_PROFILES.forEach(updateOneProfile);
// MOCK_TABLE_RATINGS.forEach(enterOneRating);
MOCK_TABLE_REVIEWS.forEach(enterOneReview);



// in terminal, cd backend/src/database/mock-data && node initMockData.js