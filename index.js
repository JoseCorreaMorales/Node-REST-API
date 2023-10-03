const express = require('express');
const debug = require('debug')('app:main');

const { Config } = require('./src/config');
const { ProductsAPI } = require('./src/products');
const { UsersAPI } = require('./src/users');
const { SalesAPI } = require('./src/sales');
const  {IndexAPI, NotFoundIndexAPI} = require('./src/index/index');


const app = express();

app.use(express.json());

IndexAPI(app);

ProductsAPI(app);
UsersAPI(app);
SalesAPI(app);

NotFoundIndexAPI(app);

app.listen(Config.port, () => {
    debug(`Server is running on port ${Config.port}`)
});

