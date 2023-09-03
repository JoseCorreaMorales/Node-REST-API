const express = require('express');
const debug = require('debug')('app:main');

const { Config } = require('./src/config');

const app = express();

app.use(express.json());



app.listen(Config.port, () => {
    debug(`Server is running on port ${Config.port}`)
});




