// import orm.js
const orm = require('../config/orm.js');

// create code to call the ORM functions using burger specific input for the ORM.
const burger = {
    selectAll(cb) {
        orm.selectAll('burgers', (res) => cb(res));
    },
    // TODO explore create 'definition' below
    // The variables cols and vals are arrays.
    insertOne(cols, vals, cb) {
        orm.insertOne('burgers', cols, vals, (res) => cb(res));
    },
    updateOne(objColVals, condition, cb) {
        orm.updateOne('burgers', objColVals, condition, (res) => cb(res));
    },
    deleteOne(condition, cb) {
        orm.deleteOne('burgers', condition, (res) => cb(res));
    }
}

// Export the database functions for the controller (burger_controller.js) file. 
module.exports = burger;