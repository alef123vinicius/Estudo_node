const express = require('express');
const db = require('../db');

const router = express.Router();

router.get('/', async (req, res, next) => {
    try {
        let results = await db.all();
        res.json(results);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

router.get('/:id', async (req, res, next) => {
    try {
        let results = await db.one(req.params.id);
        res.json(results);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

router.delete('/:id', async (req, res) => {
    try{
        let results = await db.delete(req.param.id);
        res.json(results);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

router.put('/', async (req, res) => {
    try{
        console.log(req.body);
        let results = await db.insert(req.body.comentario);
        res.json(results);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

router.head('/', async (req, res) => {
    let body = req.body;
    try{
        let results = await db.update(body.id, body.comentario);
        res.json(results);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

module.exports = router;


/*
res.json({ test: 'test'});
*/