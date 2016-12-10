import React, { PropTypes } from 'react';
import ReactCSSTransitionGroup from 'react/lib/ReactCSSTransitionGroup';

class CharacterListItemComponent extends React.Component {
  handleClick(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    this.props.setCharacterId(href);
    this.props.setAppScreen('activity');
  }
  backgroundImage() {
    const divStyle = {
      backgroundImage: `url(${this.props.character.backgroundPath})`,
    };
    return divStyle;
  }
  emblemImage() {
    const divStyle = {
      backgroundImage: `url(${this.props.character.emblemPath})`,
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
    const raceName = this.props.character.raceDetails.raceName;
    const className = this.props.character.classDetails.className;
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
            onClick={(event) => this.handleClick(event)}
          >
            <div style={this.emblemImage()} className="characterListItemEmblem"></div>
            <div className="characterListItemText">
              <p>
                {className}
                <span className="characterListItemLevel">{characterLevel}</span>
              </p>
              <p>
                <span className="characterListItemRaceDetails">{raceName}</span>
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
  setCharacterId: PropTypes.func.isRequired,
  setAppScreen: PropTypes.func.isRequired,
  character: PropTypes.object.isRequired,
};

export default CharacterListItemComponent;
