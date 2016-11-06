const resetSelect = () => ({ type: 'RESET_SELECT' });

const changeApiUrl = (activity) => ({
  type: 'CHANGE_API_URL',
  activity,
});

export { changeApiUrl, resetSelect };
