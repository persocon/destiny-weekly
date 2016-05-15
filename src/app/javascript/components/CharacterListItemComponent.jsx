import React from 'react';
import ReactCSSTransitionGroup from 'react/lib/ReactCSSTransitionGroup';

class CharacterListItemComponent extends React.Component {
  raceDetails() {
    if(this.props.character.genderDetails.genderName === "Masculino"){
      return this.props.character.raceDetails.raceNameMale;
    }else{
      return this.props.character.raceDetails.raceNameFemale;
    }
  }
  classDetails() {
    if(this.props.character.genderDetails.genderName === "Masculino"){
      return this.props.character.classDetails.classNameMale;
    }else{
      return this.props.character.classDetails.classNameFemale;
    }
  }
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

		return (
			<ReactCSSTransitionGroup
				transitionName={"fade"}
		        transitionAppear={true}
		        transitionAppearTimeout={500}
		        transitionEnterTimeout={500}
		        transitionLeaveTimeout={300}>
				<li className="characterListItem" style={this.backgroundImage()}>
          <div style={this.emblemImage()} className="characterListItemEmblem"></div>
  					<div className="characterListItemText">
  						<p>{this.classDetails()} <span className="characterListItemLevel">{this.props.character.characterLevel}</span></p>
  						<p><span className="characterListItemRaceDetails">{this.raceDetails()}</span> <span className="characterListItemLightLevel">{this.props.character.power_level}</span></p>
  					</div>
				</li>
			</ReactCSSTransitionGroup>
		);
	}
};

export default CharacterListItemComponent;
