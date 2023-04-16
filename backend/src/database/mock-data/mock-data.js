
// rating score, friendly and overall
// review content, less and more


// park
const MOCK_PARK_RATING_FRIENDLY = [120, 3, 6, 30, 24, 57]; // total, number of reviews for 1, 2, 3, 4, 5
const MOCK_PARK_RATING_OVERALL = [150, 9, 0, 36, 24, 81]; // total, number of reviews for 1, 2, 3, 4, 5


const MOCK_PARK_REVIEW_RECENT = [
    {
        name: 'Maiores Alias',
        pet: {
            name: 'Charlie',
            breed: 'Golden Retriever',
            year: 2019
        },
        locator: 234385,
        date: 'August 2019',
        score: {
            friendly: 4.3,
            overall: 4.7
        },
        content: {
            less: `Pulchra nata incrementa redwoods. Nemo erat, ut intro te stare possitis! In baculo voluntario sunt...`,
            more: `Pulchra nata incrementa redwoods. Nemo erat, ut intro te stare possitis! In baculo voluntario sunt valde liberales et cognoscibiles arborum, historiae et perceptiones.`
        }

    },
    {
        name: 'Maiores Alias',
        pet: {
            name: 'Charlie',
            breed: 'Golden Retriever',
            year: 2019
        },
        locator: 234386,
        date: 'August 2019',
        score: {
            friendly: 4.3,
            overall: 4.7
        },
        content: {
            less: `Non possunt exspectare redire et calles amicales explorare.`,
            more: `Non possunt exspectare redire et calles amicales explorare.`
        }
    },
    {
        name: 'Maiores Alias',
        pet: {
            name: 'Charlie',
            breed: 'Golden Retriever',
            year: 2019
        },
        locator: 234387,
        date: 'August 2019',
        score: {
            friendly: 4.3,
            overall: 4.7
        },
        content: {
            less: `Pulchra nata incrementa redwoods. Nemo erat, ut intro te stare possitis! In baculo voluntario sunt...`,
            more: `Pulchra nata incrementa redwoods. Nemo erat, ut intro te stare possitis! In baculo voluntario sunt valde liberales et cognoscibiles arborum, historiae et perceptiones.`
        }
    }
];

const MOCK_PARK_REVIEW_ENTIRE = [
    {
        name: 'Maiores Alias',
        pet: {
            name: 'Charlie',
            breed: 'Golden Retriever',
            year: 2019
        },
        locator: 234385,
        date: 'August 2019',
        score: {
            friendly: 4.3,
            overall: 4.7
        },
        content: {
            less: `Parco fruebamur, et canes nostri parcum amabant. Tabulas picnic ius ad raedam multum usi sumus ...`,
            more: `Pulchra nata incrementa redwoods. Nemo erat, ut intro te stare possitis! In baculo voluntario sunt valde liberales et cognoscibiles arborum, historiae et perceptiones.`
        }
    },
    {
        name: 'Maiores Alias',
        pet: {
            name: 'Charlie',
            breed: 'Golden Retriever',
            year: 2019
        },
        locator: 234385,
        date: 'August 2019',
        score: {
            friendly: 4.3,
            overall: 4.7
        },
        content: {
            less: `Pulchra nata incrementa redwoods. Nemo erat, ut intro te stare possitis! In baculo voluntario sunt...`,
            more: `Pulchra nata incrementa redwoods. Nemo erat, ut intro te stare possitis! In baculo voluntario sunt valde liberales et cognoscibiles arborum, historiae et perceptiones.`
        }
    },
    {
        name: 'Maiores Alias',
        pet: {
            name: 'Charlie',
            breed: 'Golden Retriever',
            year: 2019
        },
        locator: 234385,
        date: 'August 2019',
        score: {
            friendly: 4.3,
            overall: 4.7
        },
        content: {
            less: `Pulchra nata incrementa redwoods. Nemo erat, ut intro te stare possitis! In baculo voluntario sunt...`,
            more: `Pulchra nata incrementa redwoods. Nemo erat, ut intro te stare possitis! In baculo voluntario sunt valde liberales et cognoscibiles arborum, historiae et perceptiones.`
        }
    },
    {
        name: 'Maiores Alias',
        pet: {
            name: 'Charlie',
            breed: 'Golden Retriever',
            year: 2019
        },
        locator: 234387,
        date: 'August 2019',
        score: {
            friendly: 4.3,
            overall: 4.7
        },
        content: {
            less: `Pulchra nata incrementa redwoods. Nemo erat, ut intro te stare possitis! In baculo voluntario sunt...`,
            more: `Pulchra nata incrementa redwoods. Nemo erat, ut intro te stare possitis! In baculo voluntario sunt valde liberales et cognoscibiles arborum, historiae et perceptiones.`
        }
    },
    {
        name: 'Maiores Alias',
        pet: {
            name: 'Charlie',
            breed: 'Golden Retriever',
            year: 2019
        },
        locator: 234386,
        date: 'August 2019',
        score: {
            friendly: 4.3,
            overall: 4.7
        },
        content: {
            less: `Pulchra nata incrementa redwoods. Nemo erat, ut intro te stare possitis! In baculo voluntario sunt...`,
            more: `Pulchra nata incrementa redwoods. Nemo erat, ut intro te stare possitis! In baculo voluntario sunt valde liberales et cognoscibiles arborum, historiae et perceptiones.`
        }
    },
    {
        name: 'Maiores Alias',
        pet: {
            name: 'Charlie',
            breed: 'Golden Retriever',
            year: 2019
        },
        locator: 234385,
        date: 'August 2019',
        score: {
            friendly: 4.3,
            overall: 4.7
        },
        content: {
            less: `Pulchra nata incrementa redwoods. Nemo erat, ut intro te stare possitis! In baculo voluntario sunt...`,
            more: `Pulchra nata incrementa redwoods. Nemo erat, ut intro te stare possitis! In baculo voluntario sunt valde liberales et cognoscibiles arborum, historiae et perceptiones.`
        }
    },
];



// user
const MOCK_PROFILE_ESSENTIAL = {
    name: 'William Auburn',
    date: 'November 2020', // joined date
    town: 'Santa Cruz, California',
    email: 'user01@email.com', // settings
    password: 'password01',
};


const MOCK_PROFILE_PET = [{
    name: 'Euclid',
    breed: 'Golden Retriever',
    size: 'medium',
    year: 2016
},
{
    name: 'Mindy',
    breed: 'Chihuahua',
    size: 'tiny',
    year: 2018
},
{
    name: 'Dante',
    breed: 'German Shepard',
    size: 'medium',
    year: 2020
}

];

const MOCK_PROFILE_REVIEW_RECENT = [
    {
        name: 'Washoe Meadows State Park',
        locator: 232883,
        date: 'September 2021',
        score: {
            friendly: 4.0,
            overall: 4.3
        },
        content: {
            less: `Pulchra nata incrementa redwoods. Nemo erat, ut intro te stare possitis! In baculo voluntario sunt...`,
            more: `Pulchra nata incrementa redwoods. Nemo erat, ut intro te stare possitis! In baculo voluntario sunt valde liberales et cognoscibiles arborum, historiae et perceptiones.`
        }
    },
    {
        name: 'Emerald Bay State Park',
        locator: 232687,
        date: 'June 2020',
        score: {
            friendly: 4.3,
            overall: 4.7
        },
        content: {
            less: `Parco fruebamur, et canes nostri parcum amabant. Tabulas picnic ius ad raedam multum usi sumus ...`,
            more: `Parco fruebamur, et canes nostri parcum amabant. Tabulas picnicas ius ad raedam sortem adhibebamus et deinde parvam fasciam proximam ad aedificia visitatoris fecimus. In votis est ut pergere possimus frui et tueri hanc parcum historicum pulcherrimum.`
        }
    },
    {
        name: 'Admiral William Standley State Recreation Area',
        locator: 20210106,
        date: 'January 2021',
        score: {
            friendly: 4.3,
            overall: 4.7
        },
        content: {
            less: `Non possunt exspectare redire et calles amicales explorare.`,
            more: `Non possunt exspectare redire et calles amicales explorare.`
        }
    }
];

const MOCK_PROFILE_REVIEW_ENTIRE = [
    {
        name: 'Washoe Meadows State Park',
        locator: 232883,
        date: 'September 2021',
        score: {
            friendly: 4.0,
            overall: 4.3
        },
        content: {
            less: `Pulchra nata incrementa redwoods. Nemo erat, ut intro te stare possitis! In baculo voluntario sunt...`,
            more: `Pulchra nata incrementa redwoods. Nemo erat, ut intro te stare possitis! In baculo voluntario sunt valde liberales et cognoscibiles arborum, historiae et perceptiones.`
        }
    },
    {
        name: 'Emerald Bay State Park',
        locator: 232687,
        date: 'June 2020',
        score: {
            friendly: 4.3,
            overall: 4.7
        },
        content: {
            less: `Parco fruebamur, et canes nostri parcum amabant. Tabulas picnic ius ad raedam multum usi sumus ...`,
            more: `Parco fruebamur, et canes nostri parcum amabant. Tabulas picnicas ius ad raedam sortem adhibebamus et deinde parvam fasciam proximam ad aedificia visitatoris fecimus. In votis est ut pergere possimus frui et tueri hanc parcum historicum pulcherrimum.`
        }
    },
    {
        name: 'Admiral William Standley State Recreation Area',
        locator: 20210106,
        date: 'January 2021',
        score: {
            friendly: 4.3,
            overall: 4.7
        },
        content: {
            less: `Non possunt exspectare redire et calles amicales explorare.`,
            more: `Non possunt exspectare redire et calles amicales explorare.`
        }
    },
    {
        name: 'Washoe Meadows State Park',
        locator: 232883,
        date: 'September 2021',
        score: {
            friendly: 4.0,
            overall: 4.3
        },
        content: {
            less: `Pulchra nata incrementa redwoods. Nemo erat, ut intro te stare possitis! In baculo voluntario sunt...`,
            more: `Pulchra nata incrementa redwoods. Nemo erat, ut intro te stare possitis! In baculo voluntario sunt valde liberales et cognoscibiles arborum, historiae et perceptiones.`
        }
    },
    {
        name: 'Emerald Bay State Park',
        locator: 232687,
        date: 'June 2020',
        score: {
            friendly: 4.3,
            overall: 4.7
        },
        content: {
            less: `Parco fruebamur, et canes nostri parcum amabant. Tabulas picnic ius ad raedam multum usi sumus ...`,
            more: `Parco fruebamur, et canes nostri parcum amabant. Tabulas picnicas ius ad raedam sortem adhibebamus et deinde parvam fasciam proximam ad aedificia visitatoris fecimus. In votis est ut pergere possimus frui et tueri hanc parcum historicum pulcherrimum.`
        }
    },
    {
        name: 'Admiral William Standley State Recreation Area',
        locator: 20210106,
        date: 'January 2021',
        score: {
            friendly: 4.3,
            overall: 4.7
        },
        content: {
            less: `Non possunt exspectare redire et calles amicales explorare.`,
            more: `Non possunt exspectare redire et calles amicales explorare.`
        }
    }
];




const MOCK_DATA = {
    MOCK_PARK_RATING_FRIENDLY,
    MOCK_PARK_RATING_OVERALL,
    MOCK_PARK_REVIEW_RECENT,
    MOCK_PARK_REVIEW_ENTIRE,

    MOCK_PROFILE_ESSENTIAL,
    MOCK_PROFILE_REVIEW_RECENT,
    MOCK_PROFILE_REVIEW_ENTIRE,

    MOCK_PROFILE_PET
};

export default MOCK_DATA;