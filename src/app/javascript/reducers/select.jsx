const initialState = {
	activity: '/api/nightfall',
}
const select = (state = initialState, action) => {
	switch (action.type) {
		case 'CHANGE_API_URL':
			let newState = Object.assign({}, state, {
				select: action.activity
			});
			return newState;
			break;
		default:
			return state;
			break;
	}
}

export default select;