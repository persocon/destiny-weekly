import { connect } from 'react-redux';
import { getAppScreen } from '../actions/app';
import Component from '../components/AppComponent';

const mapStateToProps = (state) => ({ app: state.app });

const mapDispatchToProps = (dispatch) => ({
  getInitialScreen: () => {
    dispatch(getAppScreen());
  },
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export default Container;
