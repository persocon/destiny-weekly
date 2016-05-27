import { connect } from 'react-redux';
import { findActivity } from '../actions/activity';
import Component from '../components/ActivityComponent';

const mapStateToProps = (state) => ({ activity: state.activity });

const mapDispatchToProps = (dispatch) => ({
  getInitialActivity: () => {
    dispatch(findActivity());
  },
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export default Container;
