import React, { PropTypes } from 'react';
import ReactCSSTransitionGroup from 'react/lib/ReactCSSTransitionGroup';

class ListItem extends React.Component {
  image() {
    if (this.props.icon) {
      const imgUrl = `${this.props.icon}`;
      return (<div className={this.className()}><img src={imgUrl} alt="" /></div>);
    }
    return null;
  }
  className() {
    if (this.props.completed) {
      return 'imgBoxWrap completed';
    }
    return 'imgBoxWrap';
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
          {this.image()}
          <div className="boxItemText">
            <p><strong>{this.props.title}</strong></p>
            <p><small>{this.props.description}</small></p>
          </div>
        </li>
      </ReactCSSTransitionGroup>
		);
  }
}

ListItem.propTypes = {
  icon: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  completed: PropTypes.bool,
};

export default ListItem;
