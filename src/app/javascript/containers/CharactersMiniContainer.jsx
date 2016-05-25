import { connect } from 'react-redux';
import { getCharacterList, setAppScreen, setCharacterId } from '../actions/user';
import { findActivity } from '../actions/activity';
import { getOptions } from '../actions/select';
import CharactersMiniComponent from '../components/CharactersMiniComponent';

const mapStateToProps = (state) => {
	return {
		character_list: state.user.character_list,
		user_info: state.user.user_info
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
    handleClickItem: (event) => {
      event.preventDefault();
      let href = event.currentTarget.getAttribute('href');
			dispatch(setCharacterId(href));
      dispatch(getOptions());
			dispatch(findActivity());
    }
	}
}

const CharactersMiniContainer = connect(mapStateToProps, mapDispatchToProps)(CharactersMiniComponent);

export default CharactersMiniContainer;
