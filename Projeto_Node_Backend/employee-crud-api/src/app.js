/**
 * arquivo: server.js
 * descrição: arquivo responsável por fazer a conexão com o server.js
 * data: 09/03/2021
 */

const express = require('express');
const cors = require('cors');

const app = express();

const index = require('./routes/index');

//const employeeRoute = require('./routes/employee.route');

app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(express.json({ type: 'application/vnd.api+json'}));
app.use(cors());

app.use(index);

//app.use('/api/', employeeRoute);

module.exports = app;