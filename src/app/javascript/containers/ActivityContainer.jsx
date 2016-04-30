import { connect } from 'react-redux';
import { changeApiUrl } from '../actions/index.jsx';
import ActivityComponent from '../components/ActivityComponent.jsx';

const mapStateToProps = (state) => {
	return {
		activity: state.activity.activity
	}
}


const ActivityContainer = connect(mapStateToProps)(ActivityComponent);

export default ActivityContainer;