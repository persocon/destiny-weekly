import { connect } from 'react-redux';
import Component from '../components/ActivityComponent';

const mapStateToProps = (state) => ({ activity: state.activity });

const mapDispatchToProps = (dispatch) => ({
  onInit: () => {
    dispatch({ type: 'SET_ACTIVITY_REQUEST' });
  },
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export default Container;
