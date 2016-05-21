import update from 'react/lib/update';

const initialState = {
	character_list: [],
	user_info: {
		platform: '',
		username: '',
		character_id: ''
	}
};

const select = (state = initialState, action) => {
	switch (action.type) {
		case 'SET_CHARACTER_LIST':
			let newState = update(state, {
				character_list: {$set: action.character_list}
			});
			return newState;
			break;
    case 'SET_USER':
      let userState = update(state, {
        user_info: {
					platform: {$set: action.user_info.platform},
					username: {$set: action.user_info.username}
      	}
			}
			);
      return userState;
      break;
		case 'SET_USER_CHARACTER':
			let userStateCharacter = update(state, {
				user_info: {
						character_id: {$set: action.user_info.character_id}
					}
				}
			);
			return userStateCharacter;
			break;
		case 'GET_USER_CHARACTER':
			return state.user_info.character_id;
			break;
		default:
			return state;
			break;
	}
}

export default select;
