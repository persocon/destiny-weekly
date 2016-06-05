import fetch from 'isomorphic-fetch';

const resetSelect = () => ({ type: 'RESET_SELECT' });

const changeApiUrl = (activity) => ({
  type: 'CHANGE_API_URL',
  activity,
});

const setOptions = (result) => ({
  type: 'GET_OPTIONS',
  options: result,
});


const getOptions = (testing = '') => (dispatch, getState) => {
  const { user } = getState();
  const platform = user.user_info.platform;
  const username = user.user_info.username;
  const characterId = user.user_info.character_id;

  const url = `${testing}/api/selectActivity/${platform}/${username}/${characterId}`;
  return fetch(url)
    .then(resolve => resolve.json())
    .then(json => {
      json.unshift({
        advisorTypeCategory: 'Selecione Uma Atividade',
        identifier: '',
        disabled: 'disabled',
      });
      dispatch(setOptions(json));
    }
  );
};


export { changeApiUrl, getOptions, resetSelect };
