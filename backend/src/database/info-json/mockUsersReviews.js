export const MOCK_PROFILES = [{
    id: 1,
    email_address: 'user01@email.com',
    password_hash: '$scrypt$ln=16384,r=8,p=1$524ca1f91a491047$2172d042c0c23ade2270f764e69bf1dda6f25939d1ab40a39e75c2ea356f8623b4ec045cce3fc342e02fe42fb23bbf1ccfdaa26654d690b496ae4ae2b724992a',
    full_name: 'Tianyuan Shu',
    reside_in: 'Carmel, California',
    about_story: `Tianyuan shu means "method of the heavenly element" or "technique of the celestial unknown". The "heavenly element" is the unknown variable, usually written x in modern notation.`,
    preference_setting: {
        theme: 'dark'
    }
},
{
    id: 2,
    email_address: 'user02@email.com',
    password_hash: '$scrypt$ln=16384,r=8,p=1$524ca1f91a491047$2172d042c0c23ade2270f764e69bf1dda6f25939d1ab40a39e75c2ea356f8623b4ec045cce3fc342e02fe42fb23bbf1ccfdaa26654d690b496ae4ae2b724992a',
    full_name: 'Matteo Ricci',
    reside_in: 'Marche, Italy',
    about_story: `When there are some initial states of N celestial bodies, one of the celestial bodies ran to infinity or speed in a limited time.`,
    preference_setting: {
        theme: 'light'
    }
},
{
    id: 3,
    email_address: 'user03@email.com',
    password_hash: '$scrypt$ln=16384,r=8,p=1$524ca1f91a491047$2172d042c0c23ade2270f764e69bf1dda6f25939d1ab40a39e75c2ea356f8623b4ec045cce3fc342e02fe42fb23bbf1ccfdaa26654d690b496ae4ae2b724992a',
    full_name: 'Al Khwarizmi',
    reside_in: 'Woodstock, New York',
    about_story: `The enterprise sought to alleviate the difficulties for mathematicians in tracking down citations.`,
    preference_setting: {
        theme: 'dark'
    }
},
{
    id: 4,
    email_address: 'user04@email.com',
    password_hash: '$scrypt$ln=16384,r=8,p=1$524ca1f91a491047$2172d042c0c23ade2270f764e69bf1dda6f25939d1ab40a39e75c2ea356f8623b4ec045cce3fc342e02fe42fb23bbf1ccfdaa26654d690b496ae4ae2b724992a',
    full_name: 'William George Horner',
    reside_in: 'Thousand Oaks, California',
    about_story: `Algorithms for the abacus did not lead to similar conceptual advances.`,
    preference_setting: {
        theme: 'light'
    }
}];

const MOCK_PETS = [{
    profile_id: 1,

    pet_name: 'Lily',
    breed_primary: 'Golden Retriever',
    breed_secondary: 'Golden Retriever',
    weight_size: 'medium',
    age_week: '104',
},
{
    profile_id: 2,

    pet_name: 'Trooper',
    breed_primary: 'Shitzu',
    breed_secondary: 'Maltese',
    weight_size: 'medium',
    age_week: '59',
},
{
    profile_id: 3,

    pet_name: 'Minna',
    breed_primary: 'Australian Shepard',
    breed_secondary: 'English Sheepdog',
    weight_size: 'medium',
    age_week: '354',
},
];

const MOCK_REVIEWS = [
    {
        profile_id: 1,
        park_id: 1,

        visited_with_pet_id: 1,
        visited_date: 2022 / 03 / 21,

        observed_dog_on_trail: true,
        observed_dog_on_beach: false,
        observed_dog_in_campground: true,

        on_trail_rating: 3,
        on_beach_rating: 0,
        in_campground_rating: 4,

        friendly_rating: 4,
        given_overall_rating: 5,
        given_review_content: 'Both texts also made substantial progress in Linear Algebra, namely solving systems of equations with multiple unknowns.',
    },
    {
        profile_id: 2,
        park_id: 2,

        visited_with_pet_id: 2,
        visited_date: 2022 / 03 / 21,

        observed_dog_on_trail: true,
        observed_dog_on_beach: false,
        observed_dog_in_campground: true,

        on_trail_rating: 3,
        on_beach_rating: 0,
        in_campground_rating: 4,

        friendly_rating: 4,
        given_overall_rating: 5,
        given_review_content: 'Both texts also made substantial progress in Linear Algebra, namely solving systems of equations with multiple unknowns.',
    },
    {
        profile_id: 3,
        park_id: 2,

        visited_with_pet_id: 2,
        visited_date: 2022 / 03 / 21,

        observed_dog_on_trail: true,
        observed_dog_on_beach: false,
        observed_dog_in_campground: true,

        on_trail_rating: 3,
        on_beach_rating: 0,
        in_campground_rating: 4,

        friendly_rating: 4,
        given_overall_rating: 5,
        given_review_content: 'Problems were done on a counting board and included the use of negative numbers as well as fractions.',
    },
    {
        profile_id: 4,
        park_id: 2,

        visited_with_pet_id: 2,
        visited_date: 2022 / 03 / 21,

        observed_dog_on_trail: true,
        observed_dog_on_beach: false,
        observed_dog_in_campground: true,

        on_trail_rating: 3,
        on_beach_rating: 0,
        in_campground_rating: 4,

        friendly_rating: 4,
        given_overall_rating: 5,
        given_review_content: 'The Nine Chapters on the Mathematical Art was one of the most influential of all Chinese mathematical books and it is composed of 246 problems.',
    },

];