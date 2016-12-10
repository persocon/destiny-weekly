const setUser = (platform, username) => ({
  type: 'SET_USER',
  user_info: {
    platform,
    username,
  },
});

const setCharacterId = (characterId) => ({
  type: 'SET_USER_CHARACTER',
  user_info: {
    character_id: characterId,
  },
});

const getUser = (userInfo) => ({
  type: 'GET_USER',
  user_info: userInfo,
});


const getCharacterId = () => ({ type: 'GET_USER_CHARACTER' });

export { setCharacterId, getCharacterId, setUser, getUser };
