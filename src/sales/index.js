const express = require('express');

const { SalesController } = require('./controller')

const router = express.Router();


module.exports.SalesAPI = (app) => {

        router
        
        .get('/', SalesController.getSales) // http://localhost:3000/api/sales  
        .get('/report', SalesController.generateReport) // 
        .get('/:id', SalesController.getSale) // http://localhost:3000/api/sales/1
        .post('/', SalesController.createSale) // http://localhost:3000/api/sales


        app.use('/api/sales', router);
}