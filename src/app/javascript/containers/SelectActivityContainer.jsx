import { connect } from 'react-redux';
import { setActivityRequest } from '../actions/activity';
import { changeApiUrl, getOptionsRequest } from '../actions/select';
import Component from '../components/SelectActivityComponent';

const mapStateToProps = (state) => ({
  activity: state.select.activity,
  options: state.select.options,
});

const Container = connect(mapStateToProps, {
  getOptionsRequest,
  changeApiUrl,
  setActivityRequest,
})(Component);

export default Container;
