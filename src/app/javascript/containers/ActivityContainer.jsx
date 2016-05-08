import { connect } from 'react-redux';
import { findActivity } from '../actions/index';
import ActivityComponent from '../components/ActivityComponent';

const mapStateToProps = (state) => {
	return state.activity;
}

const mapDispatchToProps = (dispatch) => {
	return {
		getInitialActivity: () => {
			dispatch(findActivity());
		}

	}
}

const ActivityContainer = connect(mapStateToProps, mapDispatchToProps)(ActivityComponent);

export default ActivityContainer;
