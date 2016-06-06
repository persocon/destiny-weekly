import React, { PropTypes } from 'react';
import ReactCSSTransitionGroup from 'react/lib/ReactCSSTransitionGroup';

class CharacterListItemComponent extends React.Component {
  raceDetails() {
    if (this.props.character.genderDetails.genderName === 'Masculino') {
      return this.props.character.raceDetails.raceNameMale;
    }
    return this.props.character.raceDetails.raceNameFemale;
  }
  classDetails() {
    if (this.props.character.genderDetails.genderName === 'Masculino') {
      return this.props.character.classDetails.classNameMale;
    }
    return this.props.character.classDetails.classNameFemale;
  }
  backgroundImage() {
    const divStyle = {
      backgroundImage: `url(http://bungie.net${this.props.character.backgroundPath})`,
    };
    return divStyle;
  }
  emblemImage() {
    const divStyle = {
      backgroundImage: `url(http://bungie.net${this.props.character.emblemPath})`,
    };
    return divStyle;
  }
  progress() {
    const percent = this.props.character.percentToNextLevel;
    let style = {
      width: `${percent}%`,
    };
    return (
      <div className="characterListItemProgress">
        <div className="characterlistItemProgressBar" style={style}></div>
      </div>
    );
  }
  render() {
    const characterLevel = this.props.character.characterLevel;
    const powerLevel = this.props.character.power_level;
    return (
      <ReactCSSTransitionGroup
        transitionName={"fade"}
        transitionAppear
        transitionAppearTimeout={500}
        transitionEnterTimeout={500}
        transitionLeaveTimeout={300}
      >
        <li className="characterListItem" style={this.backgroundImage()}>
          <a
            href={this.props.character.character_id}
            onClick={this.props.handleClick}
          >
            <div style={this.emblemImage()} className="characterListItemEmblem"></div>
            <div className="characterListItemText">
              <p>
                {this.classDetails()}
                <span className="characterListItemLevel">{characterLevel}</span>
              </p>
              <p>
                <span className="characterListItemRaceDetails">{this.raceDetails()}</span>
                <span className="characterListItemLightLevel">{powerLevel}</span>
              </p>
            </div>
            {this.progress()}
          </a>
        </li>
      </ReactCSSTransitionGroup>
		);
  }
}

CharacterListItemComponent.propTypes = {
  handleClick: PropTypes.func.isRequired,
  character: PropTypes.object.isRequired,
};

export default CharacterListItemComponent;
