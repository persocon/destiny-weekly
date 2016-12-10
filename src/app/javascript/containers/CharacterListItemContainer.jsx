import { connect } from 'react-redux';
import { setCharacterId } from '../actions/user';
import { setAppScreen } from '../actions/app';
import Component from '../components/CharacterListItemComponent';

export { Component as PureCharacterListItemContainer }; // has to be exported before yo connect

const Container = connect(null, { setCharacterId, setAppScreen })(Component);

export default Container;
