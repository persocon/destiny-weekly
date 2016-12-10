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
  objectives: [],
  progress: [],
};

const activity = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_ACTIVITY': {
      const newState = update(state, { $set: action.activity });
      return newState;
    }
    case 'START_LOADING': {
      const loadingState = update(state, { $set: initialState });
      return loadingState;
    }
    default: {
      return state;
    }
  }
};

export default activity;
