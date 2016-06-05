import fetch from 'isomorphic-fetch';

const resetActivity = () => ({ type: 'RESET_ACTIVITY' });

const startLoading = () => ({ type: 'START_LOADING' });

const setActivity = (result) => {
  const title = () => {
    if (result.display.hasOwnProperty('advisorTypeCategory')) {
      return result.display.advisorTypeCategory;
    }
    return '';
  };
  const name = () => {
    if (result.hasOwnProperty('details') && result.details.hasOwnProperty('activityName')) {
      return result.details.activityName;
    }
    return '';
  };
  const desc = () => {
    if (result.hasOwnProperty('details') && result.details.hasOwnProperty('activityDescription')) {
      return result.details.activityDescription;
    }
    return '';
  };
  const completed = () => {
    if (result.hasOwnProperty('completion') && result.completion.hasOwnProperty('complete')) {
      return result.completion.complete;
    }
    return '';
  };
  const backgroundImg = () => {
    if (result.display.hasOwnProperty('image')) {
      return `http://bungie.net${result.display.image}`;
    }
    return '';
  };
  const icon = () => {
    if (result.display.hasOwnProperty('icon')) {
      return `http://bungie.net${result.display.icon}`;
    }
    return '';
  };
  const modifiers = () => {
    if (result.hasOwnProperty('extended') && result.extended.hasOwnProperty('skullCategories')) {
      return result.extended.skullCategories;
    }
    return [];
  };
  const bosses = () => {
    if (result.hasOwnProperty('bosses')) {
      return result.bosses;
    }
    return [];
  };
  const rewards = () => {
    if (result.hasOwnProperty('rewards')) {
      return result.rewards;
    }
    return [];
  };
  const items = () => {
    if (result.hasOwnProperty('items') && result.identifier === 'xur') {
      return result.items;
    }
    return [];
  };
  const bounties = () => {
    if (result.hasOwnProperty('bounties')) {
      return result.bounties;
    }
    return [];
  };
  const objectives = () => {
    if (result.hasOwnProperty('objectives')) {
      return result.objectives;
    }
    return [];
  };
  const progress = () => {
    if (result.hasOwnProperty('progress')) {
      return result.progress;
    }
    return [];
  };
  const activity = {
    identifier: result.identifier,
    title: title(),
    name: name(),
    desc: desc(),
    completed: completed(),
    backgroundImg: backgroundImg(),
    icon: icon(),
    modifiers: modifiers(),
    bosses: bosses(),
    rewards: rewards(),
    items: items(),
    bounties: bounties(),
    objectives: objectives(),
    progress: progress(),
  };
  return {
    type: 'SET_ACTIVITY',
    activity,
  };
};

const findActivity = (testing = '') => (dispatch, getState) => {
  const { select } = getState();
  const { user } = getState();
  dispatch(startLoading());
  const activity = select.activity;
  const platform = user.user_info.platform;
  const username = user.user_info.username;
  const characterId = user.user_info.character_id;
  const url = `${testing}/api/${activity}/${platform}/${username}/${characterId}`;
  return fetch(url)
    .then(response => response.json())
    .then(json => {
      dispatch(setActivity(json));
    });
};

export { findActivity, resetActivity };
