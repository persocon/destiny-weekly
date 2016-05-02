import { connect } from 'react-redux';
import { changeApiUrl, findActivity } from '../actions/index.jsx';
import ActivityComponent from '../components/ActivityComponent.jsx';

const mapStateToProps = (state) => {
	return state.activity;
}

export class ActivityContainer extends ActivityComponent {
	componentDidMount() {
		const { dispatch, identifier } = this.props;
		dispatch(findActivity(identifier));
	}
}


export default connect(mapStateToProps)(ActivityContainer);