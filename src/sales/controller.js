 const {SalesController} = require('./services');

 const debug = require('debug')('app:module-sales-controller');

 const {Response} = require('../common/response');

 const createError = require('http-errors');

 module.exports.SalesController = {
    
         getSales: async (req, res) => {
             try {
                 let sales = await SalesService.getAll();
                 Response.success(res, sales, "List of sales", 200);
             } catch (error) {
                 Response.error(res);
                 debug(error)
             }
         },
    
         getSale: async (req, res) => {
             try {
                 const {id} = req.params;
                 let sale = await SalesService.getById(id);
                 if (!sale) {
                     Response.error(res, new createError.NotFound());
                 } else {
                     Response.success(res, sale, `Sale with id ${id}`, 200);
                 }
             } catch (error) {
                 debug(error);
                 Response.error(res);
             }
         },
    
         createSale: async (req, res) => {
             try {
                 const {body} = req;
                 if (!body || Object.keys(body).length === 0) {
                     Response.error(res, new createError.BadRequest());
                 } else {
                     const insertedId = await SalesService.createSale(body);
                     Response.success(res, insertedId, `Sale inserted with id ${insertedId}`, 201);
                 }
    
             } catch (error) {
                 debug(error);
                 Response.error(res);
             }
         },
    
         generateReport: async (req, res) => {
             try {
                 SalesService.generateReport("catalog", res)
             } catch (error) {
                 debug(error);
                 Response.error(res);
             }
         }
 }