export const selectFromTable = {

    // park detail page
    parksJoined: {
        byLocator: {
            forEssential: `SELECT
            parks.id,
            park_name,
            dog_on_road,
            dog_on_trail,
            dog_on_beach,
            dog_in_campground,
            pet_friendly_rating,
            area_overall_rating,
            latitude,
            longitude,
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
            maps_place_rating,
            maps_url
            FROM parks
            INNER JOIN parks_information ON parks.locator_number = parks_information.locator_number
            INNER JOIN parks_external ON parks.locator_number = parks_external.locator_number
            WHERE parks.locator_number = $1`
        }
    },

    parks: {
        byId: {
            forEssential: `SELECT
            parks.locator_number,
            park_name,
            pet_friendly_rating,
            area_overall_rating,
            dog_allowed,
            town,
            county,
            state,
            zip_code
            FROM parks
            INNER JOIN parks_information ON parks.locator_number = parks_information.locator_number
            WHERE parks.id = $1`
        },
        byLocator: {
            forId: `SELECT id FROM parks WHERE locator_number = $1`
        }
    },


    accounts: {
        byEmail: {
            forId: `SELECT id FROM accounts WHERE email_address = $1`,
            forPassHash: `SELECT password_hash FROM accounts WHERE email_address = $1`,
            forCount: `SELECT count(*) FROM accounts WHERE email_address = $1`,
            forDeactivated: `SELECT deactivated_at FROM accounts WHERE email_address = $1`,
            forProfileId: `SELECT profile_id FROM accounts WHERE email_address = $1`
        },

        byProfileId: {
            forId: `SELECT id FROM accounts WHERE profile_id = $1`,
            forEmail: `SELECT email_address FROM accounts WHERE profile_id = $1`
        },

        // locator from table profiles
        byLocator: {
            forEmail: `SELECT email_address FROM accounts 
            INNER JOIN profiles ON accounts.profile_id = profiles.id
            WHERE locator_number = $1;`
        }
    },

    profiles: {

        byLocator: {
            forEssential: `SELECT
            id,
            full_name,
            reside_in,
            about_story,
            created_at
            FROM profiles
            WHERE locator_number = $1`,
            forId: `SELECT id FROM profiles WHERE locator_number = $1`
        },

        // email from table accounts
        byEmail: {
            forLocator: `SELECT locator_number FROM profiles
                INNER JOIN accounts ON profiles.id = accounts.profile_id
                WHERE email_address = $1`,

            forDeleted: `SELECT deleted_at FROM profiles
                INNER JOIN accounts ON profiles.id = accounts.profile_id
                WHERE email_address = $1`
        },
    },


    pets: {
        byProfileId: {
            forEssential: `SELECT
            pet_name,
            breed_primary,
            breed_secondary,
            weight_size,
            year_estimate
            FROM pets WHERE pets.profile_id = $1`
        }
    },

    favorites: {
        byProfileId: {
            forParkId: `SELECT park_id FROM favorites WHERE profile_id = $1`
        },
        byParkId: {
            forProfileId: `SELECT profile_id FROM favorites WHERE park_id = $1`
        },
        byBothIds: {
            forCount: `SELECT count(*) FROM favorites WHERE profile_id = $1 AND park_id = $2`
        }
    },

    ratings: {
        byBothIds: {
            forEssential: `SELECT
            on_road,
            on_trail,
            on_beach,
            in_campground,
            pet_friendly,
            area_overall,
            created_at
            FROM ratings
            WHERE profile_id = $1 AND park_id = $2`,
            forCount: `SELECT count(*) FROM ratings WHERE profile_id = $1 AND park_id = $2`,
        },

        byParkId: {
            forEssential: `SELECT
            on_road,
            on_trail,
            on_beach,
            in_campground,
            pet_friendly,
            area_overall,
            created_at
            FROM ratings
            WHERE park_id = $1`
        },

        byProfileId: {
            forEssential: `SELECT
            on_road,
            on_trail,
            on_beach,
            in_campground,
            pet_friendly,
            area_overall,
            created_at
            FROM ratings
            WHERE profile_id = $1`
        }
    },

    reviews: {
        byBothIds: {
            forEssential: `SELECT
            review_content,
            visited_with_pet_id,
            visited_date,
            created_at
            FROM reviews
            WHERE profile_id = $1 AND park_id = $2`,
            forCount: `SELECT count(*) FROM reviews WHERE profile_id = $1 AND park_id = $2`,
        },

        byParkId: {
            forEssential: `SELECT
            review_content,
            visited_with_pet_id,
            visited_date,
            created_at
            FROM reviews
            WHERE park_id = $1`
        }
    },

    reviewsJoined: {
        byParkId: {
            forEssential: `SELECT
            review_content,
            visited_date,
            reviews.created_at,
            pet_friendly,
            area_overall,
            locator_number,
            full_name,
            pet_name,
            breed_primary,
            weight_size,
            year_estimate
            FROM reviews
            INNER JOIN ratings ON reviews.profile_id = ratings.profile_id
            INNER JOIN profiles ON reviews.profile_id = profiles.id
            INNER JOIN pets ON reviews.visited_with_pet_id = pets.id
            WHERE reviews.park_id = $1`
        },

        byProfileId: {
            forEssential: `SELECT
            review_content,
            visited_date,
            reviews.created_at,
            pet_friendly,
            area_overall,
            locator_number,
            park_name,
            pet_name,
            breed_primary,
            weight_size,
            year_estimate
            FROM reviews
            INNER JOIN ratings ON reviews.park_id = ratings.park_id
            INNER JOIN parks ON reviews.park_id = parks.id
            INNER JOIN pets ON reviews.visited_with_pet_id = pets.id
            WHERE reviews.profile_id = $1`
        }
    },

    suggestions: {
        byBothIds: {
            forEssential: `SELECT
            dog_on_road,
            dog_on_trail,
            dog_on_beach,
            dog_in_campground,
            created_at
            FROM suggestions
            WHERE profile_id = $1 AND park_id = $2`,
            forCount: `SELECT count(*) FROM suggestions WHERE profile_id = $1 AND park_id = $2`,
        }
    }


};

export const selectDatalistOptions = (name, term, limit) => {
    return `SELECT * FROM option_sets 
        WHERE set_name = '${ name }' AND (${ term }) LIMIT ${ limit }`;
};

// for platform parks display, pagination
export const selectFromTableParksJoined = (term, area, filter, sort) => {
    return {
        parksCount: `SELECT count(*) FROM parks
        INNER JOIN parks_information ON parks.locator_number = parks_information.locator_number
        INNER JOIN parks_external ON parks.locator_number = parks_external.locator_number
        WHERE ${ term } AND ${ area } AND ${ filter }`,


        parksLimitOffset: `SELECT
        parks.locator_number,
        park_name,
        pet_friendly_rating,
        area_overall_rating,
        latitude,
        longitude,
        dog_allowed,
        town,
        county,
        state,
        zip_code,
        maps_place_rating
        FROM parks
        INNER JOIN parks_information ON parks.locator_number = parks_information.locator_number
        INNER JOIN parks_external ON parks.locator_number = parks_external.locator_number
        WHERE ${ term } AND ${ area } AND ${ filter }
        ORDER BY ${ sort } DESC
        LIMIT $1 OFFSET $2`
    };
};