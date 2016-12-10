import { connect } from 'react-redux';
import { setActivityRequest } from '../actions/activity';
import Component from '../components/ActivityComponent';

const mapStateToProps = (state) => ({ activity: state.activity });

const Container = connect(mapStateToProps, { setActivityRequest })(Component);

export default Container;
