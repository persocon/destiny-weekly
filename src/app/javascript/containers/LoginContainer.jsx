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
		onSubmit: (event) => {
      event.preventDefault();
      let username = event.target.getElementsByClassName('username')[0].value;
      let platform = event.target.getElementsByClassName('platform')[0].value;
			if(username){
				dispatch(setUser(platform, username));
      	dispatch(getCharacterList());
			}else{
				let input = event.target.getElementsByClassName('username')[0];
				input.classList.add('noUserName');
				input.focus();
			}
		},
		onUsernameChange: (event) => {
			let input = event.target;
			if(input.classList.contains("noUserName") && input.value.length >= 1){
				input.classList.remove("noUserName");
			}
		}

	}
}

const LoginContainer = connect(mapStateToProps, mapDispatchToProps)(LoginComponent);

export default LoginContainer;
