const app = require('./src/app');
const database = require('./src/database');

const port = process.env.NODE_PORT || 8000;
const databaseName = process.env.DATABASE || 'viacep';

app.listen(port, () => {
	console.log(`Server is running on port: ${port}`);
});

if(database.connect(databaseName)){
	console.log("Conectado com sucesso ao Banco de dados MongoDB");
} else {
	console.log('Ocorreu um erro ao se conectar ao Banco de dados MongoDB');
}