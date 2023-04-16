import express from 'express';
import db from '../database/index.js';
import { selectFromTableParksJoined } from '../database/queries/select.js';

const router = express.Router();



/**
 * 
 * :limit - page limit - number of parks per page, based on client page display
 * :offset - page number minus one, then times number of parks per page
 * 
 * prefix '/parks'
 */


// get multiple parks
// only fetch needed data, number of parks per page, and offset number
// limit 15, offset base on page number
router.get('/limit:limit/offset:offset', async (req, res) => {
    // req info for database, params and query
    let { limit, offset } = req.params;
    if (isNaN(limit)) {
        limit = 1;
    }
    if (isNaN(offset)) {
        offset = 15;
    }

    const { term, area, filter, sort } = req.query || null;

    // where clause, term
    const termExpression = term ?
        `to_tsvector('english', park_name || dog_policy || full_address) @@ plainto_tsquery('english', '${ term }')`
        : 'true'; // short circuit, all parks

    // where clause, area
    const areaExpression = (() => {
        if (area) {
            let coordinates = area.split(',').map(string => parseFloat(string));
            return `point(latitude, longitude) <@ box (point(${ coordinates[0] }, ${ coordinates[1] }),point(${ coordinates[2] }, ${ coordinates[3] }))`;
        } else {
            return 'true'; // short circuit, all parks
        }
    })();

    // where clause, filter pet allowed conditions
    const filterExpression = (() => {
        if (filter) {
            let filters = filter.split(' ');

            let allowed = filters.includes('allowed') ? 'dog_allowed = true' : 'true';
            let road = filters.includes('road') ? 'dog_on_road = true' : 'true';
            let trail = filters.includes('trail') ? 'dog_on_trail = true' : 'true';
            let beach = filters.includes('beach') ? 'dog_on_beach = true' : 'true';
            let campground = filters.includes('campground') ? 'dog_in_campground = true' : 'true';

            return `${ allowed } AND ${ road } AND ${ trail } AND ${ beach } AND ${ campground }`;
        } else return 'true';

    })();


    // order by clause
    const sortExpression = (() => {
        switch (true) {
            case sort == 'friendliness':
                return 'pet_friendly_rating';
            case sort == 'popularity':
                return 'maps_place_rating'; // change when are_overall_rating is set up

            default: // sort == null
                return 'park_name'; // short circuit, does not matter
        }
    })();



    // database queries, then value
    const parksTotal = (await db.query(
        selectFromTableParksJoined(termExpression, areaExpression, filterExpression, sortExpression).parksCount
    )).rows[0].count;

    const currentParks = (await db.query(
        selectFromTableParksJoined(termExpression, areaExpression, filterExpression, sortExpression).parksLimitOffset,
        [limit, offset]
    )).rows;

    // send data as response
    const pageTotal = parksTotal !== 0 ? Math.ceil(parksTotal / limit) : null;
    let data = { currentParks, pageTotal }; // currentParks is an array of park objects

    res.status(200).send(data);
});




export default router;
