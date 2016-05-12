import React from 'react';
import ReactCSSTransitionGroup from 'react/lib/ReactCSSTransitionGroup';


class LoginComponent extends React.Component {
  form() {
    return (
      <form className="loginComponent">
        <div className="loginComponentWrap">
          <input type="text" value="" placeholder="Username" className="loginComponentText" />
        </div>
          <div className="selectActivityComponent">
      			<div className="selectWrap">
              <select>
                <option>PSN</option>
                <option>Xbox</option>
              </select>
            </div>
          </div>
          <div className="loginComponentWrap">
            <input type="submit" value="Enviar" className="loginComponentSubmit" />
          </div>
      </form>
    )
  }
  render() {
    return(
          <ReactCSSTransitionGroup
            transitionName={"fade"}
            transitionAppear={true}
            transitionAppearTimeout={500}
            transitionEnterTimeout={500}
            transitionLeaveTimeout={300}>
            {this.form()}
          </ReactCSSTransitionGroup>
    )
  }
}

export default LoginComponent;
