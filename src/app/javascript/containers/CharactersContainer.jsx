import { connect } from 'react-redux';
import { getCharacterList, setAppScreen, setCharacterId,findActivity, resetActivity, resetSelect, resetUser, resetApp } from '../actions/index';
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
