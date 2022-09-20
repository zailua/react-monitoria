import React from 'react'
import Header from '../components/Header'
import './contatos.css'

export default function contatos() {

	const cpf = '463.312.678-99';
	const telefone = '+55 (11) 9 7641-2211';
	const array = [ 10.99, 99.90, 105.5, 4.99, 5.20, 6.0 ];
	const cliente = {
		nome: 'José',
		sobrenome: 'Silva',
		nascimento: new Date().toISOString(),
		idade: 32
	}

	const clientes = [
		{
			nome: 'Maria',
			sobrenome: 'José',
			nascimento: new Date().toISOString(),
			idade: 52
		},
		{
			nome: 'Marcio',
			sobrenome: 'Santos',
			nascimento: new Date().toISOString(),
			idade: 43
		},
		{
			nome: 'Ana',
			sobrenome: 'Maria',
			nascimento: new Date().toISOString(),
			idade: 26
		},
		{
			nome: 'Laura',
			sobrenome: 'Gomes',
			nascimento: new Date().toISOString(),
			idade: 19
		},
		{
			nome: 'João',
			sobrenome: 'Barbosa',
			nascimento: new Date().toISOString(),
			idade: 28
		},
	]

	//const array = [ 1, 2, 3, 4, 5, 6 ];


	let index = 0;
	while (index < array.length) {
		console.log('USANDO WHILE -> ', array[index])
		index++
	}

	for (let i = 0; i < array.length; i++) {
		console.log('USANDO FOR -> ', array[i])
	}

	function funcaoNormal(elemento) {
		return elemento*2
	}

	const funcaoFlexa = (elemento) => {
		return elemento*2
	}

	const funcaoFlexa2 = (elemento) => elemento*2
	
	//const array = [ 1, 2, 3, 4, 5, 6 ];
	const arrayComDesconto = array.map((preco) => preco - (preco * 0.15))
	// retorno esperado =  [ 3, 6, 9, 12, 15, 18 ]

	console.log(arrayComDesconto)

	return (
		<div>
			<Header />
			<div class="background">
				<div class="container">
					<div class="screen">
						<div class="screen-header">
							<div class="screen-header-left"></div>
							<div class="screen-header-right"></div>
						</div>
						<div class="screen-body">
							<div class="screen-body-item left">
								<div class="app-title">
									<span>Teste - Entre em Contato</span>
									<table style={{fontSize: '1rem'}} border="2px">
										<thead>
											<tr>
												<th>Nome</th>
												<th>Sobrenome</th>
												<th>Nascimento</th>
												<th>Idade</th>
											</tr>
										</thead>
										<tbody>
											{clientes.map(cliente => 
												<tr>
													<td>{cliente.nome}</td>
													<td>{cliente.sobrenome}</td>
													<td>{cliente.nascimento}</td>
													<td>{cliente.idade}</td>
												</tr>	
											)}
										</tbody>
									</table>
								</div>
							</div>
							<div class="screen-body-item">
								<div class="app-form">
									<div class="app-form-group">
										<input
											class="app-form-control"
											placeholder="¯\_(ツ)_/¯"
											value=""
										/>
									</div>
									<div class="app-form-group">
										<input
											class="app-form-control"
											placeholder="Insira seu nome..."
										/>
									</div>
									<div class="app-form-group">
										<input
											class="app-form-control"
											placeholder="(xx) x-xxxx-xxxx"
										/>
									</div>
									<div class="app-form-group message">
										<input class="app-form-control" placeholder="ᕦ(ò_óˇ)ᕤ" />
									</div>
									<div class="app-form-group buttons">
										<button class="app-form-button">Cancelar</button>
										<button class="app-form-button">Enviar</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
