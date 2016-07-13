import React, { PropTypes } from 'react';
import ReactCSSTransitionGroup from 'react/lib/ReactCSSTransitionGroup';
import ModifierComponent from './ModifierComponent';
import StepsComponent from './StepsComponent';

class RaidComponent extends React.Component {
  showModifiers() {
    if (this.props.modifiers.length >= 1) {
      const modifiers = this.props.modifiers.map((modifier, index) => {
        const title = modifier.title;
        const skulls = modifier.skulls;
        return (<ModifierComponent key={index} title={title} details={skulls} />);
      });
      return modifiers;
    }
    return false;
  }
  showSteps() {
    if (this.props.steps.length >= 1) {
      return (<StepsComponent steps={this.props.steps} />);
    }
    return false;
  }
  render() {
    return (
      <div className="boxText">
        <ReactCSSTransitionGroup
          transitionName={"fade"}
          transitionAppear
          transitionAppearTimeout={500}
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}
        >

          <h4 className="boxSubtitle">{this.props.title}</h4>

          {this.showSteps()}

          {this.showModifiers()}

        </ReactCSSTransitionGroup>
      </div>
    );
  }
}

RaidComponent.propTypes = {
  title: PropTypes.string.isRequired,
  modifiers: PropTypes.array,
  steps: PropTypes.array,
};

export default RaidComponent;
