import React from 'react';
import ReactCSSTransitionGroup from 'react/lib/ReactCSSTransitionGroup';

class ObjectiveProgressionComponent extends React.Component {
  progressBar(){
    let percent = Math.floor((100 / this.props.total) * this.props.progress);;
    let style = {
      width: percent+'%'
    }
    return style;
  }
  subtitle(){
    if(this.props.subtitle){
      return (<small> / {this.props.subtitle} {this.props.level}</small>);
    }
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
};

export default ObjectiveProgressionComponent;
