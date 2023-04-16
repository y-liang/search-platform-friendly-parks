import express from 'express';
import db from '../database/index.js';
import { selectFromTable } from '../database/queries/select.js';
import tokenAuthenticator from '../middleware/tokenAuthenticator.js';
import MOCK_DATA from './mock-data.js';

const router = express.Router();

router.use(tokenAuthenticator);


/**
 * details of one park, authenticated to certain actions
 * details of one profile, authorized to certain actions
 * 
 * prefix - /details
 */

/* use detail locate, type park */
// get one park, and its ratings and recent reviews, actionable via token authenticator
router.get('/park:locator', async (req, res) => {
    const { locator } = req.params;

    // token authenticator attaches email to request when authenticated
    const authenticated = req.tokenEmailActive ? true : false;
    // audience, whoever is visiting that page, if authenticated to act or authorized to edit
    const audience = { authenticated };


    // park joined table
    const essentials = (await db.query(
        selectFromTable.parksJoined.byLocator.forEssential,
        [locator]
    )).rows[0];

    // ratings
    const ratings = {
        friendly: MOCK_PARK_RATING_FRIENDLY,
        overall: MOCK_PARK_RATING_OVERALL
    };

    // reviews from mock, should be query from database
    const reviews = {
        recent: MOCK_PARK_REVIEW_RECENT,
        entire: MOCK_PARK_REVIEW_ENTIRE
    };

    res.status(200).send({ essentials, ratings, reviews, audience });
    return;
});

/* use detail locate, type user */
// get one user, its info and recent review, get token from header if any, and respond editable or not
router.get('/profile:locator', async (req, res) => {
    const { locator } = req.params;

    /* check if editable by audience visiting the page */
    // token authenticator attaches email to request when authenticated
    const authenticated = req.tokenEmailActive ? true : false;
    // locator of the audience visiting the page
    const audienceLocator = await db.query(
        selectFromTable.profiles.byEmail.forLocator,
        [req.tokenEmail]
    );
    const authorized = audienceLocator == locator;
    // audience, whoever is visiting that page, if authenticated to act or authorized to edit
    const audience = { authenticated, authorized };


    // query database for the user data, their pet info, park favorites, joined table
    const essentials = (await db.query(
        selectFromTable.profiles.byLocator.forEssential,
        [locator]
    )).rows[0];


    const { id: profileId } = essentials;

    // pets
    const pets = (await db.query(
        selectFromTable.pets.byProfileId.forEssential,
        [profileId]
    )).rows; // [..., {}, ...]


    // favorites, relate users and parks
    const parkIds = await db.query(
        selectFromTable.favorites.byProfileId.forParkId,
        [profileId]
    ).rows; //  [ ..., { park_id: 3 }, ... ] could be several parks by user id

    const favParks = await Promise.all(parkIds.map(async (val) =>
        (await db.query(
            selectFromTable.parks.byId.forEssential,
            [val.park_id]
        )).rows[0] // one park by park id
    ));  // [..., {}, ...]


    // reviews from mock, should be query from database
    const reviews = {
        recent: MOCK_PROFILE_REVIEW_RECENT,
        entire: MOCK_PROFILE_REVIEW_ENTIRE
    };

    res.status(200).send({ essentials, pets, favParks, reviews, audience });
});


router.post('/edit/profile:locator', async (req, res) => {
    const { locator } = req.params;

    /* check if editable by audience visiting the page */
    // token authenticator attaches email to request when authenticated
    const authenticated = req.tokenEmailActive ? true : false;
    // locator of the audience visiting the page
    const audienceLocator = await db.query(
        selectFromTable.profiles.byEmail.forLocator,
        [req.tokenEmail]
    );
    const authorized = audienceLocator == locator;
    // audience, whoever is visiting that page, if authenticated to act or authorized to edit
    const audience = { authenticated, authorized };

    if (!authorized) {
        res.status(401).send({ error: 'Authorization denied. You cannot edit this profile.' });
    }

    // else proceed to process data into database
    // ... ... ...




});






export default router;


// mock data as examples for formatting data from database
const {
    // MOCK_PARK_ESSENTIAL, // existed joined tables
    MOCK_PARK_RATING_FRIENDLY,
    MOCK_PARK_RATING_OVERALL,
    MOCK_PARK_REVIEW_RECENT,
    MOCK_PARK_REVIEW_ENTIRE,

    //  MOCK_PROFILE_ESSENTIAL, // mock existed in database
    //  MOCK_PROFILE_PET, // mock existed in database
    MOCK_PROFILE_REVIEW_RECENT,
    MOCK_PROFILE_REVIEW_ENTIRE
} = MOCK_DATA;

