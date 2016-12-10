import { connect } from 'react-redux';
import { setActivityRequest } from '../actions/activity';
import { changeApiUrl, getOptionsRequest } from '../actions/select';
import Component from '../components/SelectActivityComponent';

const mapStateToProps = (state) => ({
  activity: state.select.activity,
  options: state.select.options,
});

const mapDispatchToProps = (dispatch) => ({
  onSelectChange: (activity) => {
    dispatch(changeApiUrl(activity));
    dispatch({ type: 'SET_ACTIVITY_REQUEST' });
  },
  onInit: () => {
    dispatch({ type: 'GET_OPTIONS_REQUEST' });
  },
});

const Container = connect(mapStateToProps, { getOptionsRequest, changeApiUrl, setActivityRequest })(Component);

export default Container;
