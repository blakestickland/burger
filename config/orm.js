// Methods that will execute the necessary MySQL commands in the 
// controllers. Will need to use these methods to retrieve and 
// store data in the database.

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
        if (Object.hasOwnProperty.call(ob.key)) {
            // if string with spaces, add quotations
            if (typeof value === 'string' && value.indexOf(' ') >= 0) {
                value = `'${value}'`;
            }
            arr.push(`${key}=${value}`);
        }
    }
    return arr.toString();
};

// Import MySQL connection.
const connection = require('./connection.js');

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

    // insertOne()
    // updateOne()

}


// Export the orm object for the model (burger.js).
module.exports = orm;