import React, { PropTypes } from 'react';
import ReactCSSTransitionGroup from 'react/lib/ReactCSSTransitionGroup';
import ListItemComponent from './ListItemComponent';

class ModifierComponent extends React.Component {
  name(detail) {
    if (detail.hasOwnProperty('displayName')) {
      return detail.displayName;
    }
    return detail.itemName;
  }
  description(detail) {
    if (detail.hasOwnProperty('description')) {
      return detail.description;
    }
    return detail.itemDescription;
  }
  completed(detail) {
    if (detail.hasOwnProperty('detail') && detail.detail.hasOwnProperty('completed')) {
      return detail.detail.completed;
    }
    return false;
  }
  showListItems() {
    const items = this.props.details.map((detail, index) => {
      let displayName = this.name(detail);
      let description = this.description(detail);
      let completed = this.completed(detail);
      return (
        <ListItemComponent
          key={index}
          title={displayName}
          description={description}
          icon={detail.icon}
          completed={completed}
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
          <h4 className="boxSubtitle">{this.props.title}</h4>
        </ReactCSSTransitionGroup>
        <ul className="boxItems">
          {this.showListItems()}
        </ul>
      </div>
		);
  }
}

ModifierComponent.propTypes = {
  details: PropTypes.array,
  title: PropTypes.string,
};

export default ModifierComponent;
