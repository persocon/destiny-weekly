import { connect } from 'react-redux';
import { setCharacterListRequest } from '../actions/user';
import Component from '../components/CharactersComponent';

const mapStateToProps = (state) => ({ character_list: state.user.character_list });

const Container = connect(mapStateToProps, { setCharacterListRequest })(Component);

export default Container;
