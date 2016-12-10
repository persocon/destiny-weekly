import React, { PropTypes } from 'react';
import ReactCSSTransitionGroup from 'react/lib/ReactCSSTransitionGroup';
import CharacterMiniListItemComponent from './CharacterMiniListItemComponent';

class CharactersMiniComponent extends React.Component {
  list() {
    const characterList = this.props.character_list.map((character, index) => {
      const characterId = this.props.user_info.character_id;
      const selected = (character.character_id === characterId);
      return (
        <CharacterMiniListItemComponent
          selected={selected}
          character={character}
          setCharacterId={this.props.setCharacterId}
          getOptionsRequest={this.props.getOptionsRequest}
          setActivityRequest={this.props.setActivityRequest}
          key={index}
        />
      );
    });
    return (<ul className="characterMiniComponent top-bar">{characterList}</ul>);
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
        {this.list()}
      </ReactCSSTransitionGroup>
    );
  }
}
CharactersMiniComponent.propTypes = {
  setCharacterId: PropTypes.func.isRequired,
  getOptionsRequest: PropTypes.func.isRequired,
  setActivityRequest: PropTypes.func.isRequired,
  character_list: PropTypes.any,
  user_info: PropTypes.any,
};

export default CharactersMiniComponent;
