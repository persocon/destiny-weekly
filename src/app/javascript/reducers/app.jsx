import update from 'react/lib/update';

const initialState = {
	screen: 'login'
};

const select = (state = initialState, action) => {
	switch (action.type) {
		case 'SET_APP_SCREEN':
			let newState = update(state, {
				screen: {$set: action.screen}
			});
			return newState;
			break;
			case 'GET_APP_SCREEN':
				return state;
				break;
		default:
			return state;
			break;
	}
}

export default select;
