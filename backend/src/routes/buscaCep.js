const router = require('express').Router();

const axios = require('axios');

const Cep = require('../models/cep.schema');

router.route('/test').get((request, response) => {
	return response.status(200).json({
		success: true,
		message: 'Rota acessada'
	})
});

router.route('/search').post((request, response) => {
	const { cep } = request.body;

	//Checando se possui um cep na requisição
	if(!cep) {
		//Caso não retorne uma resposta BAD REQUEST
		return response.status(400).json({
			success: false,
			message: 'Necessário informar o CEP que será consultado'
		})
	}

	//Enviado requisição para api viacep e esperando resultado em JSON
	axios(`https://viacep.com.br/ws/${cep}/json/`)
		.then(viaCepResult => {
			if(viaCepResult.data) {
				if(viaCepResult.data.erro){
					return response.status(200).json({
						success: false,
						message: 'Cep inválido'
					});
				} else {
					return response.status(200).json({
						success: true,
						isCached: false,
						address: viaCepResult.data
					});
				}
			} else {
				return response.status(200).json({
					success: false,
					message: 'Resposta inesperada da Api ViaCep'
				});
			}
		}).catch(error => {			
			return response.status(200).json({
				success: false,
				error: error.message
			});
		})
});

module.exports = router;