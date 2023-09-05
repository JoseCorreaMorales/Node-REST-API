const { ProductsService } = require('./services');
const debug = require('debug')('app:module-products-controller');
/* Control all the routes defined in the index. */
module.exports.ProductsController = {
    getProducts: async (req, res) => {
        try {
            let products = await ProductsService.getAll();
            res.status(200).json(products);
        } catch (error) {
            res.status(500).json({ message: 'Error to get products, internal server error ', error })
            debug(error)
        }
    },

    getProduct: async (req, res) => {
        try {
            const { id } = req.params;
            let product = await ProductsService.getById(id);
            res.status(200).json(product);
        } catch (error) {
            debug(error);
            res.status(500).json({ message: 'Error to get product, internal server error ', error })
        }
    },

    createProduct: async (req, res) => {
        try {
            const { body } = req;
            const insertedId = await ProductsService.createProduct(body);
            res.json(insertedId)

        } catch (error) {
            debug(error);
            res.status(500).json({ message: 'Error to create product, internal server error ', error })
        }
    },


}