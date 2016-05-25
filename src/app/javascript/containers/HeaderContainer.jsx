import { connect } from 'react-redux';
import { resetUser } from '../actions/user.jsx';
import { resetActivity } from '../actions/activity';
import { resetSelect } from '../actions/select';
import { resetApp, setAppScreen } from '../actions/app';
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
