const express = require('express');
const getResponse = require('./getResponse');
const setPath = require('./setPath');

const app = express();
const publicPath = setPath(__dirname);

app.use(express.static(publicPath));

app.get('*', getResponse);
module.exports = app;
