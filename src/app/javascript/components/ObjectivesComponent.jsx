import React, { PropTypes } from 'react';
import ReactCSSTransitionGroup from 'react/lib/ReactCSSTransitionGroup';
import ObjectiveProgressionComponent from './ObjectiveProgressionComponent';

class ObjectivesComponent extends React.Component {
  showProgressionItems() {
    const items = this.props.progression.map((detail, index) => {
      const title = detail.displayDescription;
      const subtitle = detail.subDisplayDescription;
      const level = detail.level;
      const progress = detail.progress;
      const total = detail.completionValue;
      return (
        <ObjectiveProgressionComponent
          key={index}
          title={title}
          subtitle={subtitle}
          level={level}
          progress={progress}
          total={total}
        />
      );
    });
    return items;
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
          <ul className="boxItems progressObjectives">
            {this.showProgressionItems()}
          </ul>
        </ReactCSSTransitionGroup>
      </div>
		);
  }
}

ObjectivesComponent.propTypes = {
  progression: PropTypes.object,
};

export default ObjectivesComponent;
