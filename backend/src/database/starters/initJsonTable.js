import db from '../index.js';
import { DOG_BREEDS } from '../info-json/dogBreeds.js';
import { USA_CITIES } from '../info-json/usaCities.js';


const enterDogBreeds = async (breed) => {
    await db.query(`INSERT INTO option_sets (
        set_name, option_value
        ) VALUES ($1, $2);`, [
        'dog breed', breed
    ]);
};

const enterUsaCities = async (city) => {
    await db.query(`INSERT INTO option_sets (
        set_name, option_value
        ) VALUES ($1, $2);`, [
        'usa city', city
    ]);
};

DOG_BREEDS.forEach(enterDogBreeds);
USA_CITIES.forEach(enterUsaCities);

// then in console, node this file, cd backend/src/database/starters && node initJsonTable.js




// let uniqueCities = [...new Set(USA_CITIES)];
// const findDuplicates = (arr) => {
//     let sorted_arr = arr.slice().sort(); // You can define the comparing function here. 
//     // JS by default uses a crappy string compare.
//     // (we use slice to clone the array so the
//     // original array won't be modified)
//     let results = [];
//     for (let i = 0; i < sorted_arr.length - 1; i++) {
//         if (sorted_arr[i + 1] == sorted_arr[i]) {
//             results.push(sorted_arr[i]);
//         }
//     }
//     console.log(results);
//     return results;
// };

// findDuplicates(USA_CITIES);
// findDuplicates(DOG_BREEDS);


