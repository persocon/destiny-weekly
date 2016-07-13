import React, { PropTypes } from 'react';
import ReactCSSTransitionGroup from 'react/lib/ReactCSSTransitionGroup';

class StepsComponent extends React.Component {
  showSteps() {
    const steps = this.props.steps.map((step, index) => {
      let complete = 'stepItem ';
      if (step.complete) {
        complete += 'is-completed';
      }
      return (<li className={complete} key={index}></li>);
    });
    return steps;
  }
  render() {
    return (
      <div className="boxText stepBox">
        <ReactCSSTransitionGroup
          transitionName={"fade"}
          transitionAppear
          transitionAppearTimeout={500}
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}
        >
          <ul className="boxItems">
            <li className="boxItem">
              <div className="boxItemText">
                <p><strong>Onde você parou</strong></p>
                <ul className="stepItems">
                {this.showSteps()}
                </ul>
              </div>
            </li>
          </ul>

        </ReactCSSTransitionGroup>
      </div>
    );
  }
}

StepsComponent.propTypes = {
  steps: PropTypes.array.isRequired,
};

export default StepsComponent;
