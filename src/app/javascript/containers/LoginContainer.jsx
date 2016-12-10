import { connect } from 'react-redux';
import { setUser } from '../actions/user';
import { setAppScreen } from '../actions/app';
import Component from '../components/LoginComponent';

const mapStateToProps = (state) => ({ character_list: state.character_list });

const Container = connect(mapStateToProps, { setUser, setAppScreen })(Component);

export default Container;
