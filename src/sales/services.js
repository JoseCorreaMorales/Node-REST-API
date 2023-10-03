 const { ObjectId } = require('mongodb');

const { Database } = require('../database/index');

const COLLECTION = 'sales';

const { salesUtils } = require('./utils');

const getAll = async () => {
    const collection = await Database(COLLECTION);
    return await collection.find({}).toArray();
}

const getById = async (id) => {
    const collection = await Database(COLLECTION);
    let objectId = new ObjectId(id);
    return await collection.findOne({ _id: objectId });
}

const createSale = async (sale) => {
    const collection = await Database(COLLECTION);
    let result = await collection.insertOne(sale);
    return result.insertedId;
}

const generateReport = async (name, res) => {
    let sales = await getAll();
    salesUtils.excelGenerate(sales, name, res);
}

module.exports.SalesService = {
    getAll, getById, createSale, generateReport
}