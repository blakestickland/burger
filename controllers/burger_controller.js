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

router.post('/api/burgers', (req, res) => {
    burger.insertOne(['burger_name', 'devoured'], [req.body.burger_name, req.body.devoured], (result) => {
        // Send back the ID of the new burger.
        res.json({ id: result.insertId });
    });
});

router.put('/api/burgers/:id', (req, res) => {
    const condition = `id = ${req.params.id}`;

    console.log('condition', condition);
    console.log(req.body.devoured);

    burger.updateOne(
        {
            devoured: req.body.devoured,
        },
        condition,
        (result) => {
            if (result.changedRows === 0) {
                return res.status(400).end();
            }
            res.status(200).end();
        }
    );
});


// Export routes for server.js to use.
module.exports = router;