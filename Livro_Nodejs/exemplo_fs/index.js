const { response } = require('express');
const express = require('express');
const fs = require('fs');
const app = express();

app.get('/', processRequest);

function processRequest(req, res) {
    readText(req, res);
    console.log('requisição terminou');
}

function readText(req, res) {
    fs.readFile('teste.txt', function(err, data) {
        if(err){
            console.log('erro na leitura');
            return res.status(500).send('Erro ao ler arquivo');
        }
        res.write(data);
        res.end();
        console.log('leu arquivo');
    });

    console.log('Lendo arquivo, aguarde ...');
}

app.listen(3000);