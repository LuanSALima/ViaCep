const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cepSchema = new Schema(
	{
		cep: {
			type: String,
			required: [true, "Cep is required"],
			unique: true
		},
		logradouro: {
			type: String
		},
		complemento: {
			type: String
		},
		bairro: {
			type: String
		},
		localidade: {
			type: String
		},
		uf: {
			type: String
		},
		gia: {
			type: String
		},
		ddd: {
			type: String
		},
		siafi: {
			type: String
		}
	}, 
	{ timestamps: true }
);

const Cep = mongoose.model('Cep', cepSchema);

module.exports = Cep;