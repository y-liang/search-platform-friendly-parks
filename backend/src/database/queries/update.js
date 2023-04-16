export const updateTable = {
    accounts: {
        reset: `UPDATE accounts
        SET password_hash = $1, updated_at = current_timestamp(0),
        WHERE email_address = $2
        RETURNING profile_id;`,

        deactivate: `UPDATE accounts
        SET deactivated_at = current_timestamp(0)
        WHERE profile_id = $1;`,

        reactivate: `UPDATE accounts
        SET profile_id = $1,
        password_hash = $2,
        reactivated_at = current_timestamp(0),
        deactivated_at = null
        WHERE email_address = $3
        RETURNING id;`,
    },

    profiles: {
        assert: `UPDATE profiles
        SET full_name = $2,
        reside_in = $3,
        about_story = $4
        WHERE id = $1;`,

        remove: `UPDATE profiles
        SET deleted_at = current_timestamp(0)
        WHERE id = $1;`
    },

    pets: {

    }
};


export const deleteFromTable = {
    favorites: `DELETE FROM favorites WHERE profile_id = $1 AND park_id = $2`,
    pets: `DELETE FROM pets WHERE id = $1`,
};