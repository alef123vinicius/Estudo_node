const { Sequelize } = require('sequelize');
const sequelize = require('sequelize');

const connection = new Sequelize('guiaperguntas', 'root', 'a1a2a3a4', {
    host: '172.17.0.2',
    dialect: 'mysql'
});

module.exports = connection;