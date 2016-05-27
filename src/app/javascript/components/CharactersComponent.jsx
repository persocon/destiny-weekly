import React, { PropTypes } from 'react';
import ReactCSSTransitionGroup from 'react/lib/ReactCSSTransitionGroup';
import CharacterListItemComponent from './CharacterListItemComponent';
import LoadingComponent from './LoadingComponent';
import BackToLoginComponent from './BackToLoginComponent';

class CharactersComponent extends React.Component {
  componentWillMount() {
    this.props.onInit();
  }
  list() {
    if (this.props.character_list.length <= 0) {
      return (<LoadingComponent />);
    }
    if (this.props.character_list.status === 'error') {
      return (<BackToLoginComponent backToLogin={event => this.props.backToLogin(event)} />);
    }
    let characterList = this.props.character_list.map((character, index) => {
      const click = event => this.props.handleClickItem(event);
      return (
        <CharacterListItemComponent character={character} handleClick={click} key={index} />
      );
    });
    return (<ul className="characterComponent top-bar">{characterList}</ul>);
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

CharactersComponent.propTypes = {
  onInit: PropTypes.func.isRequired,
  backToLogin: PropTypes.func.isRequired,
  handleClickItem: PropTypes.func.isRequired,
  character_list: PropTypes.any,
};

export default CharactersComponent;
