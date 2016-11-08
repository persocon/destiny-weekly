import { connect } from 'react-redux';
import { setCharacterId } from '../actions/user';
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
    dispatch({ type: 'GET_OPTIONS_REQUEST' });
    dispatch({ type: 'SET_ACTIVITY_REQUEST' });
  },
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export default Container;
