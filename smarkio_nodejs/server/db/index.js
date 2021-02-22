const mysql = require('mysql');

const conn = mysql.createPool({
    connectionLimit: 10,
    password: 'smarkio',
    user: 'smarkio',
    database: 'smarkio',
    host: '172.17.0.2',
    port: '3306'
});

let smarkiodb = {};

smarkiodb.all = () => {
    return new Promise((resolve, reject) => {
        conn.query(`SELECT * FROM comentarios`, (err, results) => {
            if(err){
                return reject(err);
            }
            return resolve(results);
        });
    });
};

smarkiodb.one = (id) => {
    return new Promise((resolve, reject) => {
        conn.query(`SELECT * FROM comentarios WHERE id = ?`,[id], (err, results) => {
            if(err){
                return reject(err);
            }
            return resolve(results);
        });
    });
};

smarkiodb.delete = (id) => {
    return new Promise((resolve, reject) => {
        conn.query(`DELETE FROM comentarios WHERE  id = ?`, [id], (err, results) => {
            if(err){
                return reject(err);
            }
            return resolve(results);
        });
    });
};

smarkiodb.insert = (comentario) => {
    return new Promise((resolve, reject) => {
        conn.query(`INSERT INTO comentarios (comentario) VALUES (?)`, [comentario], (err, results) => {
            if(err){
                return reject(err);
            }
            return resolve(results);
        });
    });
};

smarkiodb.update = (id,comentario) => {
    return new Promise((resolve, reject) => {
        conn.query(`UPDATE comentarios SET comentario = ? WHERE id = ?`, [comentario,id], (err, results) => {
            if(err){
                return reject(err);
            }
            return resolve(results);
        });
    });
};

module.exports = smarkiodb;