import React from 'react'
import Header from '../components/Header'
import './contatos.css'

export default function contatos() {
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
									<span>Entre em Contato</span>
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
