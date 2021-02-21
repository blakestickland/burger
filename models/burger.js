// import orm.js
const orm = require('../config/orm.js');

// create code to call the ORM functions using burger specific input for the ORM.
const burger = {
    selectAll(cb) {
        orm.selectAll('burgers', (res) => cb(res));
    },
    // TODO explore create 'definition' below
    // The variables cols and vals are arrays.
    create(cols, vals, cb) {
        orm.create('burgers', cols, vals, (res) => cb(res));
    },
    update(objColVals, condition, cb) {
        orm.update('burgers', objColVals, condition, (res) => cb(res));
    }
}

// Export the database functions for the controller (burger_controller.js) file. 
module.exports = burger;