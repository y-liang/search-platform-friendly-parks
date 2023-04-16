

export const insertIntoTable = {

    accounts: `INSERT INTO accounts (
        profile_id,
        email_address,
        password_hash
        ) VALUES ($1, $2, $3)
        RETURNING id;`,

    accountActivities: `INSERT INTO account_activities (
        email_address,
        profile_id,
        activity_type
        ) VALUES ($1, $2, $3);`,

    profiles: `INSERT INTO profiles
        DEFAULT VALUES
        RETURNING id;`,

    pets: `INSERT INTO pets (
        profile_id,
        pet_name,
        breed_primary,
        breed_secondary,
        weight_size,
        year_estimate
        ) VALUES ($1, $2, $3, $4, $5, $6)`,


    parks: `INSERT INTO parks (
        locator_number,
        park_name,
        dog_on_road,
        dog_on_trail,
        dog_on_beach,
        dog_in_campground,
        pet_friendly_rating,
        area_overall_rating,
        latitude,
        longitude
        ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10);`,

    favorites: `INSERT INTO favorites (
        profile_id,
        park_id
        ) VALUES ($1, $2);`,

    ratings: `INSERT INTO ratings (
        profile_id,
        park_id,
        on_road,
        on_trail,
        on_beach,
        in_campground,
        pet_friendly,
        area_overall
        ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8);`,

    reviews: `INSERT INTO reviews (
        profile_id,
        park_id,
        review_content,
        visited_with_pet_id,
        visited_date
        ) VALUES ($1, $2, $3, $4, $5);`,

    suggestions: `INSERT INTO suggestions (
        profile_id,
        park_id,
        dog_on_road,
        dog_on_trail,
        dog_on_beach,
        dog_in_campground
        ) VALUES ($1, $2, $3, $4, $5, $6);`,

    parksInformation: `INSERT INTO parks_information (
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
        country
        ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11);`,

    parksExternal: `INSERT INTO parks_external (
        locator_number,
        maps_place_name,
        maps_place_id,
        maps_plus_code,
        maps_place_rating,
        maps_place_ratings_total,
        maps_url
        ) VALUES ($1, $2, $3, $4, $5, $6, $7);`,
};


