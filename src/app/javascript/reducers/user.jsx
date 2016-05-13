const initialState = {
	character_list: [],
	user_info: {}
};

const select = (state = initialState, action) => {
	switch (action.type) {
		case 'SET_CHARACTER_LIST':
			let newState = Object.assign({}, state, {
				character_list: action.character_list
			});
			return newState;
			break;
    case 'SET_USER':
      let userState = Object.assign({}, state, {
        user_info: action.user_info
      });
      return userState;
      break;
		default:
			return state;
			break;
	}
}

export default select;
