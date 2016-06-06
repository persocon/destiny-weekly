import { connect } from 'react-redux';
import { setCharacterId } from '../actions/user';
import { setAppScreen } from '../actions/app';
import Component from '../components/CharacterListItemComponent';

const mapDispatchToProps = (dispatch) => ({
  handleClick: (event) => {
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    dispatch(setCharacterId(href));
    dispatch(setAppScreen('activity'));
  },
});

export { Component as PureCharacterListItemContainer }; // has to be exported before yo connect

const Container = connect(null, mapDispatchToProps)(Component);

export default Container;
