import React, { PropTypes } from 'react';

class BackToLoginComponent extends React.Component {
  render() {
    if (!this.props.backToLogin) {
      return null;
    }
    return (
      <div className="backToLoginComponent top-bar">
        <h2>Informações erradas</h2>
        <p>Infelizmente não foi possivel encontrar seu usuário nessa plataforma</p>
        <p><a href="#" onClick={event => this.props.backToLogin(event)}>Voltar para Login.</a></p>
      </div>
		);
  }
}

BackToLoginComponent.propTypes = {
  backToLogin: PropTypes.func.isRequired,
};

export default BackToLoginComponent;
