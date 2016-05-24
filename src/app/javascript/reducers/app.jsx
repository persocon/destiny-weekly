import update from 'react/lib/update';
import {REHYDRATE} from 'redux-persist/constants';

const initialState = {
	screen: 'login'
};

const app = (state = initialState, action) => {
	switch (action.type) {
		case REHYDRATE:
	  	let incoming = action.payload.app;
			if (incoming) {
				let incomingBecomeState = update(state, {$set: incoming});
				return incomingBecomeState;
			}
			return state;
			break;
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

export default app;
