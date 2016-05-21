const initialState = {
	activity: 'nightfall',
	options: [{advisorTypeCategory: 'Carregando...'}]
};

const select = (state = initialState, action) => {
	switch (action.type) {
		case 'CHANGE_API_URL':
			let newState = Object.assign({}, state, {
				activity: action.activity
			});
			return newState;
			break;
		case 'GET_OPTIONS':
			let optState = Object.assign({}, state, {
				options: action.options
			});
			return optState;
			break;
		default:
			return state;
			break;
	}
}

export default select;
