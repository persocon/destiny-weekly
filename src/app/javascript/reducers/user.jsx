import update from 'react/lib/update';

const initialState = {
  character_list: [],
  user_info: {
    platform: '',
    username: '',
    character_id: '',
  },
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_CHARACTER_LIST': {
      const newState = update(state, {
        character_list: { $set: action.character_list },
      });
      return newState;
    }
    case 'SET_USER': {
      const userState = update(state, {
        user_info: {
          platform: { $set: action.user_info.platform },
          username: { $set: action.user_info.username },
        },
      });
      return userState;
    }
    case 'GET_USER': {
      return state;
    }
    case 'SET_USER_CHARACTER': {
      const userStateCharacter = update(state, {
        user_info: {
          character_id: { $set: action.user_info.character_id },
        },
      });
      return userStateCharacter;
    }
    case 'GET_USER_CHARACTER': {
      return state.user_info.character_id;
    }
    case 'RESET_USER': {
      const resetState = update(state, { $set: initialState });
      return resetState;
    }
    default: {
      return state;
    }
  }
};

export default user;
