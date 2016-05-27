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
          handleClick={event => this.props.handleClickItem(event)}
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
  handleClickItem: PropTypes.func.isRequired,
  character_list: PropTypes.any,
  user_info: PropTypes.any,
};

export default CharactersMiniComponent;
