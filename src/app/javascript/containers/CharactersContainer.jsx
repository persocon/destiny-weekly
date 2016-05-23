import { connect } from 'react-redux';
import { getCharacterList, setAppScreen, setCharacterId,findActivity } from '../actions/index';
import CharactersComponent from '../components/CharactersComponent';
import CharactersMiniComponent from '../components/CharactersMiniComponent';

const mapStateToProps = (state) => {
	return {
		character_list: state.user.character_list,
		user_info: state.user.user_info
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onInit: () => {
    	dispatch(getCharacterList());
		},
    backToLogin: (event) => {
      event.preventDefault();
      dispatch(setAppScreen('login'));
    },
    handleClickItem: (event) => {
      event.preventDefault();
      let href = event.currentTarget.getAttribute('href');
			dispatch(setCharacterId(href));
      dispatch(setAppScreen('activity'));
			dispatch(findActivity());
    }
	}
}

const CharactersContainer = connect(mapStateToProps, mapDispatchToProps)(CharactersComponent);
const CharactersMiniContainer = connect(mapStateToProps, mapDispatchToProps)(CharactersMiniComponent);

export {CharactersContainer, CharactersMiniContainer};
