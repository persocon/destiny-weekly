const initialState = {
	screen: 'login'
};

const select = (state = initialState, action) => {
	switch (action.type) {
		case 'SET_APP_SCREEN':
			let newState = Object.assign({}, state, {
				screen: action.screen
			});
			return newState;
			break;
		default:
			return state;
			break;
	}
}

export default select;
