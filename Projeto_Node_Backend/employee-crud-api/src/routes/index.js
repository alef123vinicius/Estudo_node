/**
 * arquivo: server.js
 * descrição: arquivo responsável pela chamada da api na aplicação no lado do back-end
 * data: 09/03/2021
 */

const express = require('express');

const router = express.Router();

router.get('/api', (req,res) => {
    res.status(200).send({
        success: 'true',
        message: 'Seja bem-vindo(a) a API Nodejs + postgresql + Azure',
        version: '1.0.0'
    });
});

module.exports = router;