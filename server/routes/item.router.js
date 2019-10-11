const express = require('express');
const router = express.Router();

const pool = require('../modules/pool');

// GET
router.get('/', (req, res) => {
    const query=`SELECT * FROM "item";`;
    pool.query(query)
        .then((result) => {
            res.send(result.rows)
        }).catch((error) => {
            console.log('Error in server GET item:', error);   
        })
})

router.get('/menu', (req, res) => {
    const query = `SELECT * FROM "item" WHERE "supplier_name" like 'bix';`;
    pool.query(query)
        .then((result) => {
            res.send(result.rows)
        }).catch((error) => {
            console.log('Error in server GET item:', error);
        })
})

// POST

// PUT

// DELETE

module.exports = router;
