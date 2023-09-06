const { ObjectId } = require("mongodb"); /* to convert id(string) to an object  */

const { Database } = require('../database/index')

const COLLECTION = 'products';

const { productsUtils } = require('./utils')

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

const generateReport = async (name, res) => {
    let products = await getAll();
    productsUtils.excelGenerate(products, name, res);

}

module.exports.ProductsService = {
    getAll, getById, createProduct, generateReport
}