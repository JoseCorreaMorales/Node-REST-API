const express = require('express');
const { ProductsController } = require('./controller')


const router = express.Router();

module.exports.ProductsAPI = (app) => {

     router
     
     .get('/', ProductsController.getProducts) // http://localhost:3000/api/products  
     .get('/report', ProductsController.generateReport) // 
     .get('/:id', ProductsController.getProduct) // http://localhost:3000/api/products/1
     .post('/', ProductsController.createProduct) // http://localhost:3000/api/products


     app.use('/api/products', router);
}