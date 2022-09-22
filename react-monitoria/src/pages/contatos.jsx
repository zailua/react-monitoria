import React from 'react'
import Header from '../components/Header'
import './contatos.css'

export default function contatos() {

	const cpf = '463.312.678-99';
	// '46331267899'

	const isNumber = (value) => !isNaN(value)

	console.log('ANTES DO SPLIT --> ', cpf)

	const cpfVetorSplit = cpf.split('')
	console.log('ANTES DO FILTER --> ', cpfVetorSplit)

	const cpfVetorSomenteNumeros = cpfVetorSplit.filter((caractere) => isNumber(caractere))
	console.log('DEPOIS DO FILTER --> ', cpfVetorSomenteNumeros)

	let cpfSomenteNumeros = '';

	cpfVetorSomenteNumeros.forEach(numero => {
		cpfSomenteNumeros += numero;
	})

	console.log('DEPOIS DO FOREACH --> ', cpfSomenteNumeros)

	const telefone = '+55 (11) 9 7641-2211';
	// '+5511976412211'

	const nascimento = '19/03/2002'
	// '2002-03-19 00:00:00'
	// '2002-03-19'

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

	//const array = [ 10.99, 99.90, 105.5, 4.99, 5.20, 6.0 ];


	let index = 0;
	while (index < array.length) {
		//console.log('USANDO WHILE -> ', array[index])
		index++
	}

	for (let i = 0; i < array.length; i++) {
		//console.log('USANDO FOR -> ', array[i])
	}

	function funcaoNormal(elemento) {
		return elemento*2
	}

	const funcaoFlexa = (elemento) => {
		return elemento*2
	}

	const funcaoFlexa2 = (elemento) => elemento*2

	const funcaoFlexa3 = elemento => elemento*2
	
	//const array = [ 10.99, 99.90, 105.5, 4.99, 5.20, 6.0 ];
	const arrayComDesconto = array.map((preco) => preco - (preco * 0.15))
	//console.log(arrayComDesconto)
	//retorno esperado: [ 9.3415, 84.915, 89.675, 4.2415, 4.42, 5.1 ]



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
