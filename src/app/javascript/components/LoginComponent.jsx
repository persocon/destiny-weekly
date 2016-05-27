import React, { PropTypes } from 'react';
import ReactCSSTransitionGroup from 'react/lib/ReactCSSTransitionGroup';

class LoginComponent extends React.Component {
  form() {
    return (
      <form className="loginComponent top-bar" onSubmit={event => this.props.onSubmit(event)}>
        <div className="loginComponentWrap">
          <input
            type="text"
            defaultValue=""
            placeholder="Username"
            className="loginComponentText username"
            onKeyUp={(event) => this.props.onUsernameChange(event)}
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
  onSubmit: PropTypes.func.isRequired,
  onUsernameChange: PropTypes.func.isRequired,
};

export default LoginComponent;
