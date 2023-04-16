export const MOCK_TABLE_PETS = [
    {
        profile_id: 21,
        pet_name: 'Euclid',
        breed_primary: 'Beagle',
        breed_secondary: '',
        weight_size: 'small',
        year_estimate: 2019
    },
    {
        profile_id: 22,
        pet_name: 'Archer',
        breed_primary: 'Australian Shepherd',
        breed_secondary: '',
        weight_size: 'medium',
        year_estimate: 2017
    },
    {
        profile_id: 222,
        pet_name: 'Brinkley',
        breed_primary: 'French Spaniel',
        breed_secondary: 'Dachshund',
        weight_size: 'small',
        year_estimate: 2018
    },
    {
        profile_id: 23,
        pet_name: 'Alta',
        breed_primary: 'Maltese',
        breed_secondary: 'Yorkshire Terrier',
        weight_size: 'small',
        year_estimate: 2019
    },
    {
        profile_id: 23,
        pet_name: 'Carlyle',
        breed_primary: 'Irish Setter',
        breed_secondary: '',
        weight_size: 'medium',
        year_estimate: 2020
    },
    {
        profile_id: 23,
        pet_name: 'Hanover',
        breed_primary: 'Great Dane',
        breed_secondary: '',
        weight_size: 'large',
        year_estimate: 2016
    }
];

export const MOCK_TABLE_PROFILES = [
    {
        id: 21,
        full_name: 'Zaha Corbusier',
        reside_in: 'Irvine',
        about_story: 'Parco fruebamur, et canes nostri parcum amabant. Tabulas picnicas ius ad raedam sortem adhibebamus et deinde parvam fasciam proximam ad aedificia visitatoris fecimus. In votis est ut pergere possimus frui et tueri hanc parcum historicum pulcherrimum.'
    },
    {
        id: 22,
        full_name: 'Norman Zumthor',
        reside_in: 'Paso Robles',
        about_story: 'Non possunt exspectare redire et calles amicales explorare.'
    },
    {
        id: 23,
        full_name: 'Shu Ban',
        reside_in: 'Santa Rosa',
        about_story: 'In baculo voluntario sunt valde liberales et cognoscibiles arborum, historiae et perceptiones.'
    },
];


export const MOCK_TABLE_RATINGS = [
    {
        profile_id: 21,
        park_id: 1,
        on_road: 4,
        on_trail: 5,
        on_beach: 0,
        in_campground: 3,
        pet_friendly: 2,
        area_overall: 4
    },
    {
        profile_id: 21,
        park_id: 2,
        on_road: 3,
        on_trail: 5,
        on_beach: 0,
        in_campground: 3,
        pet_friendly: 4,
        area_overall: 4
    },
    {
        profile_id: 22,
        park_id: 2,
        on_road: 4,
        on_trail: 5,
        on_beach: 0,
        in_campground: 3,
        pet_friendly: 4,
        area_overall: 5
    },
    {
        profile_id: 21,
        park_id: 3,
        on_road: 4,
        on_trail: 3,
        on_beach: 1,
        in_campground: 3,
        pet_friendly: 5,
        area_overall: 4
    },
    {
        profile_id: 22,
        park_id: 3,
        on_road: 4,
        on_trail: 5,
        on_beach: 3,
        in_campground: 4,
        pet_friendly: 5,
        area_overall: 4
    },
    {
        profile_id: 23,
        park_id: 3,
        on_road: 5,
        on_trail: 5,
        on_beach: 4,
        in_campground: 2,
        pet_friendly: 4,
        area_overall: 5
    }
];

export const MOCK_TABLE_REVIEWS = [
    {
        profile_id: 21,
        park_id: 1,
        review_content: 'Pulchra nata incrementa redwoods. Nemo erat, ut intro te stare possitis! In baculo voluntario sunt valde liberales et cognoscibiles arborum, historiae et perceptiones.',
        visited_with_pet_id: 5,
        visited_date: '2018-06-29',
    },
    {
        profile_id: 21,
        park_id: 2,
        review_content: 'Non possunt exspectare redire et calles amicales explorare.',
        visited_with_pet_id: 5,
        visited_date: '2020-03-12',
    },
    {
        profile_id: 21,
        park_id: 3,
        review_content: 'Pulchra nata incrementa redwoods. Nemo erat, ut intro te stare possitis! In baculo voluntario sunt valde liberales et cognoscibiles arborum, historiae et perceptiones.',
        visited_with_pet_id: 5,
        visited_date: '2021-07-31',
    },
    {
        profile_id: 22,
        park_id: 2,
        review_content: 'Pulchra nata incrementa redwoods. Nemo erat, ut intro te stare possitis! In baculo voluntario sunt valde liberales et cognoscibiles arborum, historiae et perceptiones.',
        visited_with_pet_id: 3,
        visited_date: '2019-12-03',
    },
    {
        profile_id: 22,
        park_id: 3,
        review_content: 'Non possunt exspectare redire et calles amicales explorare.',
        visited_with_pet_id: 3,
        visited_date: '2020-04-30',
    },
    {
        profile_id: 23,
        park_id: 3,
        review_content: 'Parco fruebamur, et canes nostri parcum amabant. Tabulas picnicas ius ad raedam sortem adhibebamus et deinde parvam fasciam proximam ad aedificia visitatoris fecimus. In votis est ut pergere possimus frui et tueri hanc parcum historicum pulcherrimum.',
        visited_with_pet_id: 2,
        visited_date: '2019-08-19',
    },
    {
        profile_id: 23,
        park_id: 2,
        review_content: 'Non possunt exspectare redire et calles amicales explorare.',
        visited_with_pet_id: 4,
        visited_date: '2019-08-19',
    },
    {
        profile_id: 23,
        park_id: 1,
        review_content: 'Parco fruebamur, et canes nostri parcum amabant. Tabulas picnicas ius ad raedam sortem adhibebamus et deinde parvam fasciam proximam ad aedificia visitatoris fecimus. In votis est ut pergere possimus frui et tueri hanc parcum historicum pulcherrimum.',
        visited_with_pet_id: 6,
        visited_date: '2019-08-19',
    }
];