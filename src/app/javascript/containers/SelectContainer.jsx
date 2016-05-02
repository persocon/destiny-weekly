import { connect } from 'react-redux';
import { changeApiUrl, findActivity } from '../actions/index.jsx';
import SelectComponent from '../components/SelectComponent.jsx';

const mapStateToProps = (state) => {
	return {
		activity: state.select.activity
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onSelectChange: (activity) =>{
			dispatch(changeApiUrl(activity));
			dispatch(findActivity());
		}
	}
}

const SelectContainer = connect(mapStateToProps, mapDispatchToProps)(SelectComponent);

export default SelectContainer;