import { connect } from 'react-redux';
import { setCharacterId } from '../actions/user';
import { findActivity } from '../actions/activity';
import { getOptions } from '../actions/select';
import Component from '../components/CharactersMiniComponent';

const mapStateToProps = (state) => ({
  character_list: state.user.character_list,
  user_info: state.user.user_info,
});

const mapDispatchToProps = (dispatch) => ({
  handleClickItem: (event) => {
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    dispatch(setCharacterId(href));
    dispatch(getOptions());
    dispatch(findActivity());
  },
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export default Container;
