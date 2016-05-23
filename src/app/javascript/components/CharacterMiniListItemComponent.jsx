import React from 'react';
import ReactCSSTransitionGroup from 'react/lib/ReactCSSTransitionGroup';

class CharacterMiniListItemComponent extends React.Component {
  backgroundImage() {
    let divStyle = {
      backgroundImage: 'url(http://bungie.net'+this.props.character.backgroundPath+')'
    }
    return divStyle;
  }
  emblemImage(){
    let divStyle = {
      backgroundImage: 'url(http://bungie.net'+this.props.character.emblemPath+')'
    }
    return divStyle;
  }
	render() {
    let selected = (this.props.selected)? 'characterMiniListItemSelected' : '';
		return (
			<ReactCSSTransitionGroup
				transitionName={"fade"}
		        transitionAppear={true}
		        transitionAppearTimeout={500}
		        transitionEnterTimeout={500}
		        transitionLeaveTimeout={300}>
				<li className={"characterMiniListItem "+selected} style={this.backgroundImage()}>
          <a href={this.props.character.character_id} onClick={event => this.props.handleClick(event)}>
            <div style={this.emblemImage()} className="characterListItemEmblem"></div>
            </a>
				</li>
			</ReactCSSTransitionGroup>
		);
	}
};

export default CharacterMiniListItemComponent;
