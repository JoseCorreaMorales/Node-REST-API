const { MongoClient } = require('mongodb')
const { Config } = require('../config');

const debug = require('debug')('app:module-database');

var connection = null;


/* singleton  */
module.exports.Database = (collection) => new Promise( async (resolve, reject) => {
    try {
        if(!connection){
            const client = new MongoClient(Config.mongoUri);
            connection = await client.connect();
            debug('New connection created with MongoDB Atlas'); 

        }
        debug('using connection created with MongoDB Atlas');
        const db = connection.db(Config.mongoDbName);
        resolve(db.collection(collection));

    } catch (error) {
        reject(error);
    }

})

