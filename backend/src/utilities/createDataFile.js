import fs from 'fs';

export const createDataFile = (name, data) => {
    fs.writeFile(`${name}.txt`, JSON.stringify(data), (err) => { if (err) return console.log(err); });
};