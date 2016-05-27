import update from 'react/lib/update';
import { REHYDRATE } from 'redux-persist/constants';

const initialState = {
  screen: 'login',
};

const app = (state = initialState, action) => {
  switch (action.type) {
    case REHYDRATE: {
      const incoming = action.payload.app;
      if (incoming) {
        const incomingBecomeState = update(state, { $set: incoming });
        return incomingBecomeState;
      }
      return state;
    }
    case 'SET_APP_SCREEN': {
      const newState = update(state, {
        screen: { $set: action.screen },
      });
      return newState;
    }
    case 'GET_APP_SCREEN': {
      return state;
    }
    case 'RESET_APP': {
      const resetState = update(state, { $set: initialState });
      return resetState;
    }
    default: {
      return state;
    }
  }
};

export default app;
