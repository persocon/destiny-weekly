import { connect } from 'react-redux';
import LoginComponent from '../components/LoginComponent';

const mapStateToProps = (state) => {
	// return {
	// 	activity: state.select.activity,
	// 	options: state.select.options
	// }
}

const mapDispatchToProps = (dispatch) => {
	// return {
	// 	onSelectChange: (activity) =>{
	// 		dispatch(changeApiUrl(activity));
	// 		dispatch(findActivity());
	// 	},
	// 	getInitialOptions: () => {
	// 		dispatch(getOptions());
	// 	}
  //
	// }
}

const LoginContainer = connect(mapStateToProps, mapDispatchToProps)(LoginComponent);

export default LoginContainer;
