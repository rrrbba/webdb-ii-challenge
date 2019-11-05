const express = require('express');

const knex = require('./data/dbConfig');

const router = express.Router();


router.get('/', (req, res) => {
    knex
    .select('*')
    .from('cars')
    .then(cars => {
        res.status(200).json(cars)
    })
    .catch(err => {
        res.status(500).json({ error: 'GET FAILED'})
    })
});

router.post('/', (req, res) => {
    knex
    .insert(req.body, 'id')
    .into('cars')
    .then(cars => {
        res.status(200).json(cars)
    })
    .catch(err => {
        res.status(500).json({ error: 'FAILED TO POST'})
    })
});

module.exports = router;