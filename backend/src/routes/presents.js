import express from 'express';
import db from '../database/index.js';
import { insertIntoTable } from '../database/queries/insert.js';
import { selectFromTable } from '../database/queries/select.js';
import bothIdentifier from '../middleware/bothIdentifier.js';
import tokenAuthenticator from '../middleware/tokenAuthenticator.js';

const router = express.Router();


// two forms - reviews and profile detail (includes pet)

/**
 * 
 * presents - interaction between a park and a profile, except favorites
 * 
 * suggestions, ratings and reviews
 * posting only, no editing or deleting
 * 
 * prefix '/presents'
 */

// user token to id, park locator to id

/* middleware to get audience email */
// for all routes, to guard posting anything, token in header 
router.use(tokenAuthenticator); // if req.tokenEmail is not null, meaning the token is valid and email is valid too
router.use(bothIdentifier); // has early exit for null req.tokenEmail

/* suggestions */
router.post('/suggestions/park:locator', async (req, res) => {
    const { profileId, parkId } = req;
    if (!profileId || !parkId) {
        res.status(422).send({ error: 'Unprocessable.' });
        return;
    }

    // 3 - req body, content
    const { road, trail, beach, campground } = req.body;

    // 4 - check if the pair of ids already exist
    const count = (await db.query(
        selectFromTable.suggestions.byBothIds.forCount,
        [profileId, parkId]
    )).rows[0].count;

    if (count > 0) {
        res.status(200).send({ error: 'Your previous suggestion has been taken into consideration.' });
        return;
    }

    // 5 - enter data into database when not existed prior, should this return data to confirm status?
    await db.query(
        insertIntoTable.suggestions,
        [profileId, parkId, road, trail, beach, campground]
    );

    res.status(200).send({ message: 'Thank you for your suggestion.' });
});

/* ratings */
router.post('/ratings/park:locator', async (req, res) => {
    const { profileId, parkId } = req;
    if (!profileId || !parkId) {
        res.status(422).send({ error: 'Unprocessable.' });
        return;
    }

    // 3 - req body, content
    const { road, trail, beach, campground, friendly, overall } = req.body;


    // check if the pair of ids already exist
    const count = (await db.query(
        selectFromTable.ratings.byBothIds.forCount,
        [profileId, parkId]
    )).rows[0].count;

    if (count > 0) {
        res.status(200).send({ error: 'Your previous ratings have been published.' });
        return;
    }

    // enter data into database when not existed prior
    await db.query(
        insertIntoTable.ratings,
        [profileId, parkId, road, trail, beach, campground, friendly, overall]
    );

    res.status(200).send({ message: 'Thank you for your ratings.' });
});

/* reviews */
router.post('/presents/park:locator', async (req, res) => {
    const { profileId, parkId } = req;
    if (!profileId || !parkId) {
        res.status(422).send({ error: 'Unprocessable.' });
        return;
    }

    // 3 - req body, content
    const { content, pet, date } = req.body;

    // check if the pair of ids already exist
    const count = (await db.query(
        selectFromTable.reviews.byBothIds.forCount,
        [profileId, parkId]
    )).rows[0].count;

    if (count > 0) {
        res.status(200).send({ error: 'Your previous review has been published.' });
        return;
    }

    // enter data into database when not existed prior
    await db.query(
        insertIntoTable.reviews,
        [profileId, parkId, content, pet, date]
    );

    res.status(200).send({ message: 'Thank you for your review.' });
});









export default router;
