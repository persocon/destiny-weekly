import { connect } from 'react-redux';
import { getCharacterList, setCharacterId, resetUser } from '../actions/user';
import { findActivity, resetActivity } from '../actions/activity';
import { resetSelect } from '../actions/select.jsx';
import { setAppScreen, resetApp } from '../actions/app';
import CharactersComponent from '../components/CharactersComponent';

const mapStateToProps = (state) => {
	return {
		character_list: state.user.character_list
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
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
      let href = event.currentTarget.getAttribute('href');
			dispatch(setCharacterId(href));
      dispatch(setAppScreen('activity'));
    }
	}
}

const CharactersContainer = connect(mapStateToProps, mapDispatchToProps)(CharactersComponent);

export default CharactersContainer;
