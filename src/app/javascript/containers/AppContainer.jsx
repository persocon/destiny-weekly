import { connect } from 'react-redux';
import { setAppScreen, getAppScreen } from '../actions/index';
import AppComponent from '../components/AppComponent';

const mapStateToProps = (state) => {
	return state.app;
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