import { connect } from 'react-redux';
import { getCharacterList, setUser } from '../actions/index';
import LoginComponent from '../components/LoginComponent';

const mapStateToProps = (state) => {
	return {
		character_list: state.character_list
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onSubmit: (event) =>{
      event.preventDefault();
      let username = event.target.getElementsByClassName('username')[0].value;
      let platform = event.target.getElementsByClassName('platform')[0].value;

			dispatch(setUser(platform, username));
      dispatch(getCharacterList());
		}

	}
}

const LoginContainer = connect(mapStateToProps, mapDispatchToProps)(LoginComponent);

export default LoginContainer;
