const express = require('express');
const debug = require('debug')('app:main');

const { Config } = require('./src/config');
const { ProductsAPI } = require('./src/products');

const app = express();

app.use(express.json());


ProductsAPI(app);

app.listen(Config.port, () => {
    debug(`Server is running on port ${Config.port}`)
});




