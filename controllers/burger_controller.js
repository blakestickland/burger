const express = require('express');

const router = express.Router();

// Import the model (burger.js) to use it's database functions.
const burger = require('../models/burger.js');

//Create all routes and set up logic within those routes where required.
router.get('/', (req, res) => {
    burger.selectAll((data) => {
        const hbsObject = {
            burgers: data,
        };
        console.log('hbsObject', hbsObject);
        res.render('index', hbsObject);
    });
});



// Export routes for server.js to use.
module.exports = router;