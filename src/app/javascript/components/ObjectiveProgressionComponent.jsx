import React from 'react';
import ReactCSSTransitionGroup from 'react/lib/ReactCSSTransitionGroup';

class ObjectiveProgressionComponent extends React.Component {
  progressBar(){
    let percent = Math.floor((100 / this.props.completionValue) * this.props.progress);;
    let style = {
      width: percent+'%'
    }
    return style;
  }
	render() {
		return (
			<ReactCSSTransitionGroup
				transitionName={"fade"}
		        transitionAppear={true}
		        transitionAppearTimeout={500}
		        transitionEnterTimeout={500}
		        transitionLeaveTimeout={300}>
				<li className="listItem boxItem">
					<div className="boxItemText">
						<p><strong>{this.props.title}</strong></p>
						<p>{this.props.progress} / {this.props.completionValue}</p>
            <div className="progressBarWrap">
              <div className="progressBar" style={this.progressBar()}></div>
            </div>
					</div>
				</li>
			</ReactCSSTransitionGroup>
		);
	}
};

export default ObjectiveProgressionComponent;
