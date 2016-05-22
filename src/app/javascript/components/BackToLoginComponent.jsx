import React from 'react';

class BackToLoginComponent extends React.Component {
	render() {
		return (
			<div className="backToLoginComponent top-bar">
        <h2>Informações erradas</h2>
        <p>Infelizmente não foi possivel encontrar seu usuário nessa plataforma</p>
        <p><a href="#" onClick={event => this.props.backToLogin(event)}>Voltar para Login.</a></p>
      </div>
		)
	}
}

export default BackToLoginComponent;
