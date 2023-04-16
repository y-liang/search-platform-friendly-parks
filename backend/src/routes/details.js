import express from 'express';
import db from '../database/index.js';
import { selectFromTable } from '../database/queries/select.js';
import emailStatusChecker from '../middleware/emailStatusChecker.js';
import tokenAuthenticator from '../middleware/tokenAuthenticator.js';

// import MOCK_DATA from '../database/mock-data/mock-data.js';


/**
 * details of one park, authenticated to certain actions
 * details of one profile, authorized to certain actions
 * 
 * prefix - /details
 */


const router = express.Router();
router.use(tokenAuthenticator);
// router.use(emailStatusChecker);




/* use detail locate, type park */
// get one park, and its ratings and recent reviews, actionable via token authenticator
router.get('/park/:locator', async (req, res) => {


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

    // console.log('essentials', essentials);

    const parkId = 1; // or 2 or 3 mock ratings and reviews
    /*** attn change to this, park id for ratings and reviews ***/
    // const { id: parkId } = essentials;
    // console.log('parkId', parkId);


    const ratings = (await db.query(
        selectFromTable.ratings.byParkId.forEssential,
        [parkId]
    )).rows;

    const reviews = (await db.query(
        selectFromTable.reviewsJoined.byParkId.forEssential,
        [parkId]
    )).rows;

    // console.log('essentials, ratings, reviews, audience', { essentials, ratings, reviews, audience });

    res.status(200).send({ essentials, ratings, reviews, audience });
});

/* use detail locate, type user */
// get one user, its info and recent review, get token from header if any, and respond editable or not
router.get('/profile/:locator', async (req, res) => {
    let { locator } = req.params; // could later be changed if audience own profile

    /* check if editable by audience visiting the page */
    // token authenticator attaches email to request when authenticated
    const authenticated = req.tokenEmailActive ? true : false;


    // locator of the audience visiting the page
    const audienceLocator = authenticated ? (await db.query(
        selectFromTable.profiles.byEmail.forLocator,
        [req.tokenEmail]
    )).rows[0].locator_number : null;

    const authorized = audienceLocator == locator;
    // audience, whoever is visiting that page, if authenticated to act or authorized to edit
    const audience = { authenticated, authorized };

    /* sidetrack, in case of no locator given, mean own profile */
    // if no locator, null string, means audience navigated to their own profile, must be logged in
    if (locator == 'null') {
        if (!authenticated) {
            return res.status(401).send({ error: 'Access denied.', notfound: true });
        } else { // authenticated true, mean has logged in, add audience locator to audience object
            audience.authorized = true;
            audience.locator = audienceLocator; // so audience now {authenticated, authorized, locator}
            locator = audienceLocator; // and pull audience own profile detail below
        }
    }


    // query database for the user data, their pet info, park favorites, joined table
    const essentials = (await db.query(
        selectFromTable.profiles.byLocator.forEssential,
        [locator]
    )).rows[0];

    const { id: profileId } = essentials;

    // pets, attn, later replace mock with this
    const pets = (await db.query(
        selectFromTable.pets.byProfileId.forEssential,
        [profileId]
    )).rows; // [..., {}, ...]


    // favorites, relate users and parks
    const parkIds = (await db.query(
        selectFromTable.favorites.byProfileId.forParkId,
        [profileId]
    )).rows; //  [ ..., { park_id: 3 }, ... ] could be several parks by user id

    const favParks = await Promise.all(parkIds.map(async (val) =>
        (await db.query(
            selectFromTable.parks.byId.forEssential,
            [val.park_id]
        )).rows[0] // one park by park id
    ));  // [..., {}, ...]

    const reviews = (await db.query(
        selectFromTable.reviewsJoined.byProfileId.forEssential,
        [profileId]
    )).rows;



    res.status(200).send({ essentials, pets, favParks, reviews, audience });
});


router.post('/edit/profile/:locator', async (req, res) => {
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
        return res.status(401).send({ error: 'Authorization denied. You cannot edit this profile.' });
    }

    // else proceed to process data into database
    // ... ... ...




});




export default router;


