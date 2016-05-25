import { connect } from 'react-redux';
import { setAppScreen, getAppScreen } from '../actions/app';
import AppComponent from '../components/AppComponent';

const mapStateToProps = (state) => {
	return {app: state.app};
}

const mapDispatchToProps = (dispatch) => {
	return {
		getInitialScreen: () => {
			dispatch(getAppScreen());
		}

	}
}

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(AppComponent);

export default AppContainer;
