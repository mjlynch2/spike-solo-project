const express = require('express');
const router = express.Router();

const pool = require('../modules/pool');

// GET
router.get('/', (req, res) => {
    res.sendStatus(200);
})

// POST

// PUT

// DELETE

module.exports = router;
