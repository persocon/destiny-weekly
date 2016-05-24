import { connect } from 'react-redux';
import { resetActivity, resetSelect, resetUser, resetApp, setAppScreen } from '../actions/index';
import HeaderComponent from '../components/HeaderComponent';

const mapDispatchToProps = (dispatch) => {
	return {
    handleLogOut: (event) => {
      event.preventDefault();
      dispatch(resetActivity());
      dispatch(resetSelect());
      dispatch(resetUser());
      dispatch(resetApp());
			dispatch(setAppScreen('login'));
    }
	}
}

const HeaderContainer = connect(null, mapDispatchToProps)(HeaderComponent);

export default HeaderContainer;
