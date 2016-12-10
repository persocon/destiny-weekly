import { connect } from 'react-redux';
import { setCharacterId } from '../actions/user';
import { setActivityRequest } from '../actions/activity';
import { getOptionsRequest } from '../actions/select';
import Component from '../components/CharactersMiniComponent';

const mapStateToProps = (state) => ({
  character_list: state.user.character_list,
  user_info: state.user.user_info,
});

const Container = connect(mapStateToProps, {
  setCharacterId,
  getOptionsRequest,
  setActivityRequest,
})(Component);

export default Container;
