import express from 'express';
import cors from 'cors';


import parks from './routes/parks.js';
import details from './routes/details.js';
import account from './routes/account.js';
import presents from './routes/presents.js';
import favorites from './routes/favorites.js';
import options from './routes/options.js';
import { NODE_ENV, EXPRESS_PORT } from './utilities/environmental.js';



const app = express();

app.use(cors());
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true }));  // for parsing application/x-www-form-urlencoded



// router modules
app.use('/parks', parks);
app.use('/details', details);
app.use('/account', account);
app.use('/presents', presents);
app.use('/options', options);
app.use('/favorites', favorites);

// all middleware need to return res.send('')
// the last res.send('') in a route does not need to be returned

// catch all error handler, and error-handling function, not necessary to catch any errors anymore unless want to override error
app.use((err, req, res, next) => {
    // log errors
    console.error(err.stack);

    // could specify error handling here, eg
    // if (req.xhr) {
    //     res.status(500).send({ error: 'xhr error' })
    // } ...

    // handle errors
    return res.status(500).send({ error: err });
}); // no need to catch db query exceptions anymore



app.listen(EXPRESS_PORT, () => {
    console.log(`${ NODE_ENV } environment; express server now listening at http://localhost:${ EXPRESS_PORT }`);
});






/**
 * data flow
 * 
 * 1 database schema for table, postgres
 * 2 function to populate table rows with data, node
 * 3 route to serve data and send response, express
 * 4 distributor to use and receive data, react
 * 5 component to display data, react
 * 
 */
