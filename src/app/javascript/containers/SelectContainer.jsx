import { connect } from 'react-redux';
import { changeApiUrl } from '../actions/index.jsx';
import SelectComponent from '../components/SelectComponent.jsx';

const mapStateToProps = (state) => {
	return {
		activity: state.activity.activity
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onSelectChange: (activity) =>{
			dispatch(changeApiUrl(activity));
		}
	}
}

const SelectContainer = connect(mapStateToProps, mapDispatchToProps)(SelectComponent);

export default SelectContainer;