import React, { PropTypes } from 'react';

class BackToLoginComponent extends React.Component {
  reset(event) {
    event.preventDefault();
    this.props.resetApp();
  }
  backToLoginButton() {
    return (
      <p>
        <a href="#" onClick={(event) => this.reset(event)}>
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
  resetApp: PropTypes.func.isRequired,
};

export default BackToLoginComponent;
