const express = require('express');

const router = express.Router();

module.exports.ProductsAPI = (app) => {

     router
     
     .get('/', (req, res) => {}) // http://localhost:3000/api/products  
     .get('/:id', (req, res) => {}) // http://localhost:3000/api/products/1
     .post('/', (req, res) => {}) // http://localhost:3000/api/products


     app.use('/api/products', router);
}