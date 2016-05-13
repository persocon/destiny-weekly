import fetch from 'isomorphic-fetch';

const startLoading = () => {
	return {
		type: 'START_LOADING',
		isLoading: true
	}
}

const doneLoading = () => {
	return {
		type: 'STOP_LOADING',
		isLoading: false
	}
}

const changeApiUrl = (activity) => {
	return {
		type: 'CHANGE_API_URL',
		activity
	}
}

const setOptions = (result) => {
	return {
		type: 'GET_OPTIONS',
		options: result
	}
}

const getOptions = () => {
	return dispatch => {
		dispatch(startLoading())
  	return fetch('/api/selectActivity')
		  .then(resolve => resolve.json())
			.then( json => {
				dispatch(doneLoading());
				json.unshift({advisorTypeCategory: "Selecione Uma Atividade", identifier: "", disabled: "disabled"});
				dispatch(setOptions(json));
			}
		)
 }
}

const setActivity = (result)  => {
	let lastGist = result[0];
	let activity = {
		identifier: result.display.identifier,
		title: (result.display.hasOwnProperty('advisorTypeCategory'))? result.display.advisorTypeCategory : '',
		name: (result.hasOwnProperty('details') && result.details.hasOwnProperty('activityName')) ? result.details.activityName : '',
		desc: (result.hasOwnProperty('details') && result.details.hasOwnProperty('activityDescription')) ? result.details.activityDescription : '',
		backgroundImg: (result.display.hasOwnProperty('image')) ? 'http://bungie.net' + result.display.image : '',
		icon: (result.display.hasOwnProperty('icon')) ? 'http://bungie.net' + result.display.icon : '',
		modifiers: (result.hasOwnProperty('extended') && result.extended.hasOwnProperty('skullCategories')) ? result.extended.skullCategories : [],
		bosses: (result.hasOwnProperty('bosses')) ? result.bosses : [],
		rewards: (result.hasOwnProperty('rewards')) ? result.rewards : [],
		items: (result.hasOwnProperty('items') && result.display.identifier == "xur") ? result.items : [],
		bounties: (result.hasOwnProperty('bounties')) ? result.bounties : []
	}
	return {
		type: 'SET_ACTIVITY',
		activity: activity
	}
}

const findActivity = () => {
 return (dispatch, getState) => {
   dispatch(startLoading())
   let activity_id = getState().select.activity;
	 return fetch('/api/'+activity_id)
	 .then(response => response.json())
	 .then(json => {
				dispatch(doneLoading());
				dispatch(setActivity(json));
			}
		)
 }
}

const setCharacterList = (result) => {
	let characters = result;
	return {
		type: 'SET_CHARACTER_LIST',
		characters: characters
	}
}

const setUser = (platform, username) => {
	return {
		type: 'SET_USER',
		user_info: {
			platform,
			username
		}
	}
}

const getCharacterList = () => {
	return (dispatch, getState) => {
		dispatch(startLoading());
		let username = getState().user.user_info.username;
		let platform = getState().user.user_info.platform;
		return fetch('/api/getCharacterList/'+platform+'/'+username)
		.then(response => response.json())
		.then(json => {
				dispatch(doneLoading());
				dispatch(setCharacterList(json));
		})
	}
}

export {findActivity, changeApiUrl, getOptions, getCharacterList, setUser};
