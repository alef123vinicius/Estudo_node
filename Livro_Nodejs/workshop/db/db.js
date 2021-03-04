const mongoClient = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectID;
const url = 'mongodb://nodejs:a1a2a3a4@172.17.0.2:27017/';
const dbName = 'database';

mongoClient.connect(url + dbName)
    .then(client => {
        global.client = client
    })
    .catch(err => {
        console.log(err)
    });

function findAll(callback) {
    const db = global.client.db(dbName);
    const collection = db.collection('documents');
    collection.find({}).toArray(callback);
}

function insert(customer, callback) {
    const db = global.client.db(dbName);
    const collection = db.collection('documents');
    collection.insert(customer, callback);
}

function deleteOne(id, callback) {
    const db = global.client.db(dbName);
    const collection = db.collection('documents');
    collection.deleteOne({_id: new ObjectId(id)}, callback);
}

module.exports = { findAll, insert, deleteOne };