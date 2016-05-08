import { connect } from 'react-redux';
import { changeApiUrl, findActivity, getOptions } from '../actions/index';
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
