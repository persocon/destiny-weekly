import { connect } from 'react-redux';
import { getCharacterList } from '../sagas/user';
import Component from '../components/CharactersComponent';

const mapStateToProps = (state) => ({ character_list: state.user.character_list });

const mapDispatchToProps = (dispatch) => ({
  onInit: () => {
    dispatch({ type: 'SET_CHARACTER_LIST_REQUEST' });
  },
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export default Container;
