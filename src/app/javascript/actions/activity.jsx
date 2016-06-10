import fetch from 'isomorphic-fetch';

const resetActivity = () => ({ type: 'RESET_ACTIVITY' });

const startLoading = () => ({ type: 'START_LOADING' });

const setActivity = (result) => ({
  type: 'SET_ACTIVITY',
  activity: result,
});

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
