const initialState = {
	activity: 'nightfall'
};

const select = (state = initialState, action) => {
	switch (action.type) {
		case 'CHANGE_API_URL':
			let newState = Object.assign({}, state, {
				activity: action.activity
			});
			return newState;
			break;
		default:
			return state;
			break;
	}
}

export default select;