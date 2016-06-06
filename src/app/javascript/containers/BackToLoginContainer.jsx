import { connect } from 'react-redux';
import { resetUser } from '../actions/user';
import { resetActivity } from '../actions/activity';
import { resetSelect } from '../actions/select.jsx';
import { setAppScreen, resetApp } from '../actions/app';
import Component from '../components/BackToLoginComponent';


const mapDispatchToProps = (dispatch) => ({
  backToLogin: (event) => {
    event.preventDefault();
    dispatch(resetActivity());
    dispatch(resetSelect());
    dispatch(resetUser());
    dispatch(resetApp());
    dispatch(setAppScreen('login'));
  },
});

const Container = connect(null, mapDispatchToProps)(Component);

export default Container;
