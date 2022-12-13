const express = require ('express');
const app = express();
const morgan = require('morgan');

const Productrouter = require('./api/v1/routes/product')
app.use(morgan('common'));
app.use("/product",Productrouter);

module.exports = app;