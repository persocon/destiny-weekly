import update from 'react/lib/update';

const initialState = {
	activity: 'nightfall',
	options: [{advisorTypeCategory: 'Carregando...'}]
};

const select = (state = initialState, action) => {
	switch (action.type) {
		case 'CHANGE_API_URL':
			let newState = update(state, {
				activity: {$set: action.activity}
			});
			return newState;
			break;
		case 'GET_OPTIONS':
			let optState = update(state, {
				options: {$set: action.options}
			});
			return optState;
			break;
		default:
			return state;
			break;
	}
}

export default select;
