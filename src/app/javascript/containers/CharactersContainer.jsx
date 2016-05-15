import { connect } from 'react-redux';
import { getCharacterList, setAppScreen } from '../actions/index';
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
      dispatch(setAppScreen('login'));
    }
	}
}

const CharactersContainer = connect(mapStateToProps, mapDispatchToProps)(CharactersComponent);

export default CharactersContainer;
