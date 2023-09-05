const { ProductsService } = require('./services');
const debug = require('debug')('app:module-products-controller');
const { Response } = require('../common/response');
const createError = require('http-errors');
/* Control all the routes defined in the index. */
module.exports.ProductsController = {
    getProducts: async (req, res) => {
        try {
            let products = await ProductsService.getAll();
            Response.success(res, products, "List of products", 200);
        } catch (error) {
            Response.error(res);
            debug(error)
        }
    },

    getProduct: async (req, res) => {
        try {
            const { id } = req.params;
            let product = await ProductsService.getById(id);
            if (!product) {
                Response.error(res, new createError.NotFound());
            } else {
                Response.success(res, product, `Product with id ${id}`, 200);
            }
        } catch (error) {
            debug(error);
            Response.error(res);
        }
    },

    createProduct: async (req, res) => {
        try {
            const { body } = req;
            if (!body || Object.keys(body).length === 0) {
                Response.error(res, new createError.BadRequest());
            } else {
                const insertedId = await ProductsService.createProduct(body);
                Response.success(res, insertedId, `Pruduct inserted with id ${insertedId}`, 201);
            }

        } catch (error) {
            debug(error);
            Response.error(res);
        }
    },


}