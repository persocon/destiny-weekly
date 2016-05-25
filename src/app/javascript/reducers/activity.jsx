import update from 'react/lib/update';

const initialState = {
	identifier: 'nightfall',
	title: 'loading',
	name: '',
	desc: '',
	completed: '',
	backgroundImg: '',
	icon: '',
	modifiers: [],
	bosses: [],
	items: [],
	rewards: [],
	bounties: [],
	objectives: []
}
const activity = (state = initialState, action) => {
	switch (action.type) {
		case 'SET_ACTIVITY':
			let newState = update(state, {$set: action.activity});
			return newState;
			break;
		case 'START_LOADING':
			let loadingState = update(state, {$set: initialState});
			return loadingState;
			break;
		case 'RESET_ACTIVITY':
			let resetState = update(state, {$set: initialState});
			return resetState;
			break;
		default:
			return state;
			break;
	}
}

export default activity;
