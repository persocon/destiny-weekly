import React, { PropTypes } from 'react';
import ReactCSSTransitionGroup from 'react/lib/ReactCSSTransitionGroup';
import CharacterMiniListItemComponent from './CharacterMiniListItemComponent';



class CharactersMiniComponent extends React.Component {
  componentWillMount(){
    this.props.onInit();
  }
  list(){
    let character_list = this.props.character_list.map((character, index) => {
      let selected = (character.character_id === this.props.user_info.character_id) ? true : false;
      return (
        <CharacterMiniListItemComponent selected={selected} character={character} handleClick={event => this.props.handleClickItem(event)} key={index} />
      );
    });
    return(<ul className="characterMiniComponent top-bar">{character_list}</ul>);
  }
  render() {
    return(
          <ReactCSSTransitionGroup
            transitionName={"fade"}
            transitionAppear={true}
            transitionAppearTimeout={500}
            transitionEnterTimeout={500}
            transitionLeaveTimeout={300}>
            {this.list()}
          </ReactCSSTransitionGroup>
    )
  }
}
CharactersMiniComponent.propTypes = {
	onInit: PropTypes.func.isRequired,
  handleClickItem: PropTypes.func.isRequired
}

export default CharactersMiniComponent;
