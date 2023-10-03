const express = require('express');

const { Response } = require('../common/response');

const createError = require('http-errors');

module.exports.IndexAPI = (app) => {

    const router = express.Router();

    router.get('/', (req, res) => {

        const routes = {
            products: `https://${req.headers.host}/api/products`,
            users: `https://${req.headers.host}/api/users`,
            sales: `https://${req.headers.host}/api/sales`,
        }

        Response.success(res, "Welcome to the API", "Welcome", 200);

    });

    app.use('/', router);

}

module.exports.NotFoundIndexAPI = (app) => {
    const router = express.Router();

    router.all('*', (req, res) => {
        Response.error(res, createError(404, 'Not Found'), "Not Found", 404);

    });

    app.use('/', router);
    
}
