import { connect } from 'react-redux';
import { resetUser } from '../actions/user.jsx';
import { resetActivity } from '../actions/activity';
import { resetSelect } from '../actions/select';
import { resetApp, setAppScreen } from '../actions/app';
import Component from '../components/HeaderComponent';

const mapDispatchToProps = (dispatch) => ({
  handleLogOut: (event) => {
    event.preventDefault();
    dispatch(resetActivity());
    dispatch(resetSelect());
    dispatch(resetUser());
    dispatch(resetApp());
    dispatch(setAppScreen('login'));
  },
});

export { Component as PureHeaderContainer };

const Container = connect(null, mapDispatchToProps)(Component);

export default Container;
