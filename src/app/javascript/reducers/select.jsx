import update from 'react/lib/update';

const initialState = {
  activity: 'nightfall',
  options: [{ advisorTypeCategory: 'Carregando...' }],
};

const select = (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_API_URL': {
      const newState = update(state, {
        activity: { $set: action.activity },
      });
      return newState;
    }
    case 'GET_OPTIONS': {
      const optState = update(state, {
        options: { $set: action.options },
      });
      return optState;
    }
    case 'RESET_SELECT': {
      const resetState = update(state, { $set: initialState });
      return resetState;
    }
    default: {
      return state;
    }
  }
};

export default select;
