import { connect } from 'react-redux';
import { resetActivity, resetSelect, resetUser, resetApp, setAppScreen } from '../actions/index';
import MenuComponent from '../components/MenuComponent';

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

const MenuContainer = connect(null, mapDispatchToProps)(MenuComponent);

export default MenuContainer;
