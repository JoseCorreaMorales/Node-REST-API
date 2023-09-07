const express = require('express');
const debug = require('debug')('app:main');

const { Config } = require('./src/config');
const { ProductsAPI } = require('./src/products');
const { UsersAPI } = require('./src/users');

const app = express();

app.use(express.json());


ProductsAPI(app);
UsersAPI(app);

app.listen(Config.port, () => {
    debug(`Server is running on port ${Config.port}`)
});

