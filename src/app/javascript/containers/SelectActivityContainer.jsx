import { connect } from 'react-redux';
import { findActivity } from '../actions/activity';
import { changeApiUrl, getOptions } from '../actions/select';
import SelectActivityComponent from '../components/SelectActivityComponent';

const mapStateToProps = (state) => {
	return {
		activity: state.select.activity,
		options: state.select.options
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onSelectChange: (activity) =>{
			dispatch(changeApiUrl(activity));
			dispatch(findActivity());
		},
		getInitialOptions: () => {
			dispatch(getOptions());
		}

	}
}

const SelectActivityContainer = connect(mapStateToProps, mapDispatchToProps)(SelectActivityComponent);

export default SelectActivityContainer;
