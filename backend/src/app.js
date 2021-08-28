const express = require('express');
const cors = require('cors');
const compression = require('compression')

const buscaCepRouter = require('./routes/buscaCep');

require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(compression());

app.use('/cep', buscaCepRouter);

module.exports = app;