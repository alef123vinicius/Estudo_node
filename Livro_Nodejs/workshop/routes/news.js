var express = require('express');
var router = express.Router();

/* GET new page */
router.get('/', function (req, res, next) {
    res.render('news', { title: 'Bem vindo ao cadastro de clientes' });
});

module.exports = router;