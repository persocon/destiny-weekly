import React, { PropTypes } from 'react';
import ReactCSSTransitionGroup from 'react/lib/ReactCSSTransitionGroup';
import CharacterListItemContainer from '../containers/CharacterListItemContainer';
import LoadingComponent from './LoadingComponent';
import BackToLoginContainer from '../containers/BackToLoginContainer';

class CharactersComponent extends React.Component {
  componentWillMount() {
    this.props.onInit();
  }
  list() {
    if (this.props.character_list.length <= 0) {
      return (<LoadingComponent />);
    }
    if (this.props.character_list.status === 'error') {
      return (<BackToLoginContainer />);
    }
    let characterList = this.props.character_list.map((character, index) => (
      <CharacterListItemContainer character={character} key={index} />
      )
    );
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
  character_list: PropTypes.any,
};

export default CharactersComponent;
