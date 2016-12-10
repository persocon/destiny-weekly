import React, { PropTypes } from 'react';
import ReactCSSTransitionGroup from 'react/lib/ReactCSSTransitionGroup';

class LoginComponent extends React.Component {
  onSubmit(event) {
    event.preventDefault();
    const username = event.target.getElementsByClassName('username')[0].value;
    const platform = event.target.getElementsByClassName('platform')[0].value;
    if (username) {
      this.props.setUser(platform, username);
      this.props.setAppScreen('character_list');
    } else {
      const input = event.target.getElementsByClassName('username')[0];
      input.classList.add('noUserName');
      input.focus();
    }
  }
  onUsernameChange(event) {
    const input = event.target;
    if (input.classList.contains('noUserName') && input.value.length >= 1) {
      input.classList.remove('noUserName');
    }
  }
  form() {
    return (
      <form className="loginComponent top-bar" onSubmit={event => this.onSubmit(event)}>
        <div className="loginComponentWrap">
          <input
            type="text"
            defaultValue=""
            placeholder="Username"
            className="loginComponentText username"
            onKeyUp={(event) => this.onUsernameChange(event)}
          />
        </div>
        <div className="selectActivityComponent">
          <div className="selectWrap">
            <select className="platform">
              <option value="2">PSN</option>
              <option value="1">Xbox</option>
            </select>
          </div>
        </div>
        <div className="loginComponentWrap">
          <input type="submit" value="Enviar" className="loginComponentSubmit" />
        </div>
      </form>
    );
  }
  render() {
    return (
      <ReactCSSTransitionGroup
        transitionName={"fade"}
        transitionAppear
        transitionAppearTimeout={500}
        transitionEnterTimeout={500}
        transitionLeaveTimeout={300}
      >
          {this.form()}
      </ReactCSSTransitionGroup>
    );
  }
}

LoginComponent.propTypes = {
  setUser: PropTypes.func.isRequired,
  setAppScreen: PropTypes.func.isRequired,
};

export default LoginComponent;
