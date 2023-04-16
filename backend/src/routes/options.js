import express from 'express';
import db from '../database/index.js';
import { WEIGHT_SIZES } from '../database/info-json/weightSizes.js';
import { selectDatalistOptions } from '../database/queries/select.js';

const router = express.Router();

/**
 * 
 * prefix /options
 */

router.get('/set:name', async (req, res) => {
    const { name } = req.params; // table column set_name, either 'dog_breed' or 'usa_city' or 'weight_size'

    // weight_size not in database, return the constant and exit early
    if (name == 'weight_size') {
        res.status(200).send(WEIGHT_SIZES);
        return;
    }

    // name - usa_city, dog_breed
    const { term } = req.query;
    const termExpression = term ?
        `option_value LIKE '%${term}%' OR 
            to_tsvector('english', option_value) @@ plainto_tsquery('english', '${term}')`
        : 'true';

    const data = (await db.query(selectDatalistOptions(name, termExpression, 9))).rows; // [..., { id: 22, set_name: 'dog_breed', option_value: 'Australian Shepherd' }, ...]
    const options = data.map((val) => val.option_value); // [..., 'Australian Shepherd', ...]

    res.status(200).send(options);
});



export default router;