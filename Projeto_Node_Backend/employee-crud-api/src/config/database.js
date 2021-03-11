/**
 * arquivo: config/database.js
 * descrição: arquivo responsável pelas connectionStrings
 * data: 10/03/2021
 */

const { Pool } = require('pq');
const dotenv = require('dotenv');

dotenv.config();


// Conexão com banco
const pool = new Pool({
    connectionString: process.env.DATABASE_URL
});


pool.on('error', (err, client) => {
    console.log('Unexpected error on idle client', err)
    process.exit(-1);
});

pool.on('connect', () => {
    console.log('Base de dados conectado com sucesso!')
});


module.exports = {
    query: (text, params) => 
}