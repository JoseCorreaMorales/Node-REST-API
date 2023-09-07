const { ObjectId } = require("mongodb"); /* to convert id(string) to an object  */

const { Database } = require('../database/index')

const COLLECTION = 'users';



const getAll = async () => {
    const collection = await Database(COLLECTION)
    return await collection.find({}).toArray();

}

const getById = async (id) => {
    const collection = await Database(COLLECTION)
    let objectId = new ObjectId(id);
    return await collection.findOne({ _id: objectId });
}

const createUser = async (user) => {
    const collection = await Database(COLLECTION)
    let result = await collection.insertOne(user);   
    return result.insertedId;
}

module.exports.UsersService = {
    getAll, getById, createUser
}