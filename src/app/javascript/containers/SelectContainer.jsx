import { connect } from 'react-redux';
import { changeApiUrl, findActivity, getOptions } from '../actions/index.jsx';
import SelectComponent from '../components/SelectComponent.jsx';

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

const SelectContainer = connect(mapStateToProps, mapDispatchToProps)(SelectComponent);

export default SelectContainer;