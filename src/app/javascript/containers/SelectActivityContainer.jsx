import { connect } from 'react-redux';
import { findActivity } from '../actions/activity';
import { changeApiUrl, getOptions } from '../actions/select';
import Component from '../components/SelectActivityComponent';

const mapStateToProps = (state) => ({
  activity: state.select.activity,
  options: state.select.options,
});

const mapDispatchToProps = (dispatch) => ({
  onSelectChange: (activity) => {
    dispatch(changeApiUrl(activity));
    dispatch(findActivity());
  },
  getInitialOptions: () => {
    dispatch(getOptions());
  },
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export default Container;
