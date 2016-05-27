import { connect } from 'react-redux';
import { getCharacterList, setCharacterId, resetUser } from '../actions/user';
import { resetActivity } from '../actions/activity';
import { resetSelect } from '../actions/select.jsx';
import { setAppScreen, resetApp } from '../actions/app';
import Component from '../components/CharactersComponent';

const mapStateToProps = (state) => ({ character_list: state.user.character_list });

const mapDispatchToProps = (dispatch) => ({
  onInit: () => {
    dispatch(getCharacterList());
  },
  backToLogin: (event) => {
    event.preventDefault();
    dispatch(resetActivity());
    dispatch(resetSelect());
    dispatch(resetUser());
    dispatch(resetApp());
    dispatch(setAppScreen('login'));
  },
  handleClickItem: (event) => {
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    dispatch(setCharacterId(href));
    dispatch(setAppScreen('activity'));
  },
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export default Container;
