const changeApiUrl = (activity) => ({
  type: 'CHANGE_API_URL',
  activity,
});

const getOptionsRequest = () => ({ type: 'GET_OPTIONS_REQUEST' });

export { changeApiUrl, getOptionsRequest };
