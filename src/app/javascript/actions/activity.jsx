import fetch from 'isomorphic-fetch';

const resetActivity = () => {
	return {
		type: 'RESET_ACTIVITY'
	}
}

const startLoading = () => {
	return {
		type: 'START_LOADING'
	}
}

const setActivity = (result)  => {
	let lastGist = result[0];
	let activity = {
		identifier: result.display.identifier,
		title: (result.display.hasOwnProperty('advisorTypeCategory'))? result.display.advisorTypeCategory : '',
		name: (result.hasOwnProperty('details') && result.details.hasOwnProperty('activityName')) ? result.details.activityName : '',
		desc: (result.hasOwnProperty('details') && result.details.hasOwnProperty('activityDescription')) ? result.details.activityDescription : '',
		completed: (result.hasOwnProperty('completion') && result.completion.hasOwnProperty('complete')) ? result.completion.complete : '',
		backgroundImg: (result.display.hasOwnProperty('image')) ? 'http://bungie.net' + result.display.image : '',
		icon: (result.display.hasOwnProperty('icon')) ? 'http://bungie.net' + result.display.icon : '',
		modifiers: (result.hasOwnProperty('extended') && result.extended.hasOwnProperty('skullCategories')) ? result.extended.skullCategories : [],
		bosses: (result.hasOwnProperty('bosses')) ? result.bosses : [],
		rewards: (result.hasOwnProperty('rewards')) ? result.rewards : [],
		items: (result.hasOwnProperty('items') && result.display.identifier == "xur") ? result.items : [],
		bounties: (result.hasOwnProperty('bounties')) ? result.bounties : [],
		objectives: (result.hasOwnProperty('objectives')) ? result.objectives : [],
		progress: (result.hasOwnProperty('progress')) ? result.progress : []
	}
	return {
		type: 'SET_ACTIVITY',
		activity: activity
	}
}

const findActivity = () => {
 return (dispatch, getState) => {
   const {select} = getState();
	 const {user} = getState();
	 if(!user || !select){
		 return Promise.resolve();
	 }
	 dispatch(startLoading());
	 return fetch('/api/'+select.activity+'/'+user.user_info.platform+'/'+user.user_info.username+'/'+user.user_info.character_id)
	 .then(response => response.json())
	 .then(json => {
				dispatch(setActivity(json));
			}
		)
 }
}

export {findActivity, resetActivity};
