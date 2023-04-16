
import express from 'express';
import db from '../database/index.js';
import { insertIntoTable } from '../database/queries/insert.js';
import { selectFromTable } from '../database/queries/select.js';
import { deleteFromTable } from '../database/queries/update.js';
import bothIdentifier from '../middleware/bothIdentifier.js';
import emailStatusChecker from '../middleware/emailStatusChecker.js';
import tokenAuthenticator from '../middleware/tokenAuthenticator.js';

const router = express.Router();

// token for req.tokenEmail
router.use(tokenAuthenticator);
router.use(emailStatusChecker);
router.use(bothIdentifier);

/* check if favorite - park profile - pair exists */
router.get('/pair/park:locator', async (req, res) => {

    const { profileId, parkId } = req;

    if (!profileId || !parkId) {
        res.status(422).send({ error: 'Unprocessable.' });
        return;
    }


    const count = (await db.query(
        selectFromTable.favorites.byBothIds.forCount,
        [profileId, parkId]
    )).rows[0].count; // { count: '1' } or { count: '0' }

    const paired = parseInt(count) > 0 ? true : false;

    res.status(200).send({ paired });
});

/* add to favorites */
router.post('/plus/park:locator', async (req, res) => {

    const { profileId, parkId } = req;
    if (!profileId || !parkId) {
        res.status(422).send({ error: 'Unprocessable.' });
        return;
    }

    await db.query(
        insertIntoTable.favorites,
        [profileId, parkId]
    );

    res.status(200).send({ message: 'Added to favorites' });
});

/* removed from favorites */
router.delete('/minus/park:locator', async (req, res) => {
    const { profileId, parkId } = req;
    if (!profileId || !parkId) {
        res.status(422).send({ error: 'Unprocessable.' });
        return;
    }

    await db.query(
        deleteFromTable.favorites,
        [profileId, parkId]
    );

    res.status(200).send({ message: 'Removed from favorites' });
});


export default router;