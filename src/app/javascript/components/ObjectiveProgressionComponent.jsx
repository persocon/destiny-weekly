import React, { PropTypes } from 'react';
import ReactCSSTransitionGroup from 'react/lib/ReactCSSTransitionGroup';

class ObjectiveProgressionComponent extends React.Component {
  progressBar() {
    const percent = Math.floor((100 / this.props.total) * this.props.progress);
    const style = {
      width: `${percent}%`,
    };
    return style;
  }
  subtitle() {
    if (this.props.subtitle) {
      return (<small> / {this.props.subtitle} {this.props.level}</small>);
    }
    return null;
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
        <li className="listItem boxItem">
          <div className="boxItemText">
            <p><strong>{this.props.title}</strong>{this.subtitle()}</p>
            <p>{this.props.progress} / {this.props.total}</p>
            <div className="progressBarWrap">
              <div className="progressBar" style={this.progressBar()}></div>
            </div>
          </div>
        </li>
      </ReactCSSTransitionGroup>
		);
  }
}

ObjectiveProgressionComponent.propTypes = {
  progress: PropTypes.number,
  total: PropTypes.number,
  level: PropTypes.any,
  title: PropTypes.string,
  subtitle: PropTypes.string,
};

export default ObjectiveProgressionComponent;
