import React, { Component } from 'react';

import axios from 'axios';

//import { Container, Content } from './style';

class BuscaCep extends Component {

	constructor(props) {
		super(props);

		/*Fazendo a bind para que o 'this' usado nas funções façam referencia a classe*/
		this.handleSubmit = this.handleSubmit.bind(this);
		this.onChangeCep = this.onChangeCep.bind(this);

		this.state = {
			cep: '',
			address: '',
			error: ''
		}
	}

	componentDidMount(){
		document.title = 'ViaCep - Buscar Cep';
	}

	handleSubmit(e) {
		e.preventDefault();

		axios.post("http://localhost:8000/cep/search", {cep: this.state.cep})
			.then(response => {
				this.setState({address: response.data.address});
			})
			.catch(error => {
				this.setState({error: error.message});
			})
	}

	onChangeCep(e) {
		this.setState({
			cep: e.target.value
		})
	}

	render() {
		return (
			<div>
				<h1>Página de Busca de Ceps</h1>

				{(this.state.error) && 
                    <span style={{color: 'red'}}>{this.state.error}</span>
                }

				<form onSubmit={this.handleSubmit}>
					<input type="text" value={this.state.cep} onChange={this.onChangeCep}/>
					<input type="submit" value="Buscar" />
				</form>

				{(this.state.address) &&
					<span>
						{this.state.address.logradouro} / {this.state.address.uf}
					</span>
				}
			</div>
		)
	}
}

export default BuscaCep;