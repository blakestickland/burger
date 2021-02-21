// Methods that will execute the necessary MySQL commands in the 
// controllers. Will need to use these methods to retrieve and 
// store data in the database.

// Import MySQL connection.
const connection = require('./connection.js');


// Helper function for SQL syntax.

const printQuestionMarks = (num) => {
    const arr = [];

    for (let i = 0; i < num; i++) {
        arr.push('?');
    }
    return arr.toString();
}

// Helper function to convert object key-value pairs to SQL syntax.
const objToSql = (ob) => {
    const arr = [];

    // loop through the keys and push the key-value as a string int arr
    for (const key in ob) {
        let value = ob[key];
        // check to skip hidden properties
        // if (Object.hasOwnProperty.call(ob.key)) {
            // if string with spaces, add quotations
            if (typeof value === 'string' && value.indexOf(' ') >= 0) {
                value = `'${value}'`;
            }
            // TODO if typeof value is not equal to string throw error

            arr.push(`${key}=${value}`);
        // }
    }
    return arr.toString();
};


const orm = {
    selectAll(tableInput, cb) {
        const queryString = `SELECT * FROM ${tableInput};`;
        connection.query(queryString, (err, result) => {
            if (err) {
                throw (err);
            }
            cb(result);
        });
    },

    insertOne(table, cols, vals, cb) {
        let queryString = `INSERT INTO ${table}`;

        queryString +=' (';
        queryString += cols.toString();
        queryString += ') ';
        queryString +='VALUES (';
        queryString += printQuestionMarks(vals.length);
        queryString += ') ';

        console.log(queryString);

        connection.query(queryString, vals, (err, result) => {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    updateOne(table, objColVals, condition, cb) {
        let queryString = `UPDATE ${table}`;

        queryString += ' SET ';
        queryString += objToSql(objColVals);
        queryString += ' WHERE ';
        queryString += condition;

        console.log(queryString);
        connection.query(queryString, (err, result) => {
            if (err) {
                throw error;
            }
            cb (result);
        });
    }
};


// Export the orm object for the model (burger.js).
module.exports = orm;