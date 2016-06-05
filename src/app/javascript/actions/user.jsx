import fetch from 'isomorphic-fetch';

const resetUser = () => ({ type: 'RESET_USER' });

const setUser = (platform, username) => ({
  type: 'SET_USER',
  user_info: {
    platform,
    username,
  },
});

const setCharacterList = (result) => ({
  type: 'SET_CHARACTER_LIST',
  character_list: result,
});

const getCharacterList = (testing = '') => (dispatch, getState) => {
  const { user } = getState();
  if (!user) {
    return Promise.resolve();
  }
  const platform = user.user_info.platform;
  const username = user.user_info.username;
  const url = `${testing}/api/getCharacterList/${platform}/${username}`;
  return fetch(url)
  .then(response => response.json())
  .then(json => {
    dispatch(setCharacterList(json));
  });
};

const setCharacterId = (characterId) => ({
  type: 'SET_USER_CHARACTER',
  user_info: {
    character_id: characterId,
  },
});

const getCharacterId = () => ({ type: 'GET_USER_CHARACTER' });

export { setCharacterId, getCharacterId, getCharacterList, resetUser, setUser };
