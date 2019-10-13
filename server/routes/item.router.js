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
router.post('/ingredient', (req, res) => {
    const query = `INSERT INTO "item" ("name") VALUES ($1);`;
    const values = [req.body.name];
    pool.query(query, values)
        .then(() => {
            res.sendStatus(201);
        }).catch((error) => {
            console.log('Error in server POST item:', error);
        })
})

// PUT

// DELETE

module.exports = router;
