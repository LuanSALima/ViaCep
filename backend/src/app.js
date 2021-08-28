const express = require('express');
const cors = require('cors');

const buscaCepRouter = require('./routes/buscaCep');

require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

const mongoose = require('mongoose');

const uri = process.env.ATLAS_URI;

mongoose.connect(uri+'viacep'+"?retryWrites=true&w=majority", {
	useNewUrlParser: true,
	useUnifiedTopology: true
}).catch(err => {
	console.log('Ocorreu um erro ao se conectar ao Banco de dados MongoDB');
});

const connection = mongoose.connection;
connection.once('open', () => {
	console.log('Conectado com sucesso ao Banco de dados MongoDB');
});

app.use('/cep', buscaCepRouter);

module.exports = app;