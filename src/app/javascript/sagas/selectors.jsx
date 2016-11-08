export const getUserInfo = state => state.user;

export const selectActivity = state => {
  return {
    username: state.user.user_info.username,
    platform: state.user.user_info.platform,
    characterId: state.user.user_info.character_id,
    activity: state.select.activity,
  };
};
