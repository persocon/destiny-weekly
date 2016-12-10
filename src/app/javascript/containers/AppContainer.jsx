import { connect } from 'react-redux';
import { getAppScreen } from '../actions/app';
import Component from '../components/AppComponent';

const mapStateToProps = (state) => ({ app: state.app });

const Container = connect(mapStateToProps, { getAppScreen })(Component);

export default Container;
