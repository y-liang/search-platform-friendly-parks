/**
 * id by profile email, or park locator
 * 
 * profile and park interaction
 * used in favorites and presents
 * 
 * cannot access req.params from middleware, const { locator } = req.params; would not work
 * instead utilize req.path
 */

import db from '../database/index.js';
import { selectFromTable } from '../database/queries/select.js';


const bothIdentifier = async (req, res, next) => {

    if (!req.tokenEmailActive) {
        return res.status(401).send({ error: 'Unauthorized.' });
        // not next()
    }

    // req.path instead of req.params in middleware
    const locator = req.path.split('park')[1];

    if (!locator) {
        return res.status(422).send({ error: 'Unprocessable.' });
        // not next()
    }

    const profileId = (await db.query(
        selectFromTable.accounts.byEmail.forProfileId,
        [req.tokenEmail]
    )).rows[0].profile_id;

    const parkId = (await db.query(
        selectFromTable.parks.byLocator.forId,
        [locator]
    )).rows[0].id;

    req.profileId = profileId;
    req.parkId = parkId;

    return next();

};

export default bothIdentifier;