import { connect } from 'react-redux';
import { getCharacterList } from '../actions/user';
import Component from '../components/CharactersComponent';

const mapStateToProps = (state) => ({ character_list: state.user.character_list });

const mapDispatchToProps = (dispatch) => ({
  onInit: () => {
    dispatch(getCharacterList());
  },
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export default Container;
