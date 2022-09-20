import React from 'react'
import Header from '../components/Header'
import './contatos.css'

export default function contatos() {

	const cpf = '463.312.678-99';
	const telefone = '+55 (11) 9 7641-2211';
	const array = [ 1, 2, 3, 4, 5, 6 ];
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
									{/* <br/>
									<h5>Demo map</h5>
									<ul>
								 		{array.map(e => 
											<li>Recode Pro - Turma {e}</li>
										)}
									</ul>
									<br/>
									<h5>Demo filter</h5>
									<ul>
								 		{array.filter(e => e > 3).map(e => 
											<li>Recode Pro - Turma {e}</li>
										)}
									</ul> */}
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
