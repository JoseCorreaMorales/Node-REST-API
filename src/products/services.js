const { ObjectId } = require("mongodb"); /* to convert id(string) to an object  */

const { Database } = require('../database/index')

const COLLECTION = 'products';

const getAll = async () => {
    const collection = await Database(COLLECTION)
    return await collection.find({}).toArray();

}

const getById = async (id) => {
    const collection = await Database(COLLECTION)
    let objectId = new ObjectId(id);
    return await collection.findOne({ _id: objectId });
}

const createProduct = async (product) => {
    const collection = await Database(COLLECTION)
    let result = await collection.insertOne(product);   
    return result.insertedId;
}

module.exports.ProductsService = {
    getAll, getById, createProduct
}