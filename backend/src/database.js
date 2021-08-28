const mongoose = require('mongoose');

const uri = process.env.ATLAS_URI;

module.exports.connect = async (databaseName) => {
	await mongoose.connect(uri+databaseName+"?retryWrites=true&w=majority", {
		useNewUrlParser: true,
		useUnifiedTopology: true
	}).catch(err => {
		return false;
	});

	const connection = mongoose.connection;
	connection.once('open', () => {
		return true;
	});
}