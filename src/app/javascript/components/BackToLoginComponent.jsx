import React, { PropTypes } from 'react';

class BackToLoginComponent extends React.Component {
  backToLoginButton() {
    return (
      <p>
        <a href="#" onClick={this.props.handleBackToLogin}>
        Voltar para Login.
        </a>
      </p>
    );
  }
  render() {
    return (
      <div className="backToLoginComponent top-bar">
        <h2>Informações erradas</h2>
        <p>Infelizmente não foi possivel encontrar seu usuário nessa plataforma</p>
        {this.backToLoginButton()}
      </div>
    );
  }
}

BackToLoginComponent.propTypes = {
  handleBackToLogin: PropTypes.func.isRequired,
};

export default BackToLoginComponent;
