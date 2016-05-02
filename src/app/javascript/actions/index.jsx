import $ from 'jquery';

export const changeApiUrl = (activity) => {
	return {
		type: 'CHANGE_API_URL',
		activity
	}
}

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

const setActivity = (result)  => {
	let lastGist = result[0];
	let activity = {
		identifier: result.display.identifier,
		title: (result.display.hasOwnProperty('advisorTypeCategory'))? result.display.advisorTypeCategory : '',
		name: (result.hasOwnProperty('details') && result.details.hasOwnProperty('activityName')) ? result.details.activityName : '',
		desc: (result.hasOwnProperty('details') && result.details.hasOwnProperty('activityDescription')) ? result.details.activityDescription : '',
		backgroundImg: (result.display.hasOwnProperty('image')) ? 'http://bungie.net' + result.display.image : '',
		modifiers: (result.hasOwnProperty('extended') && result.extended.hasOwnProperty('skullCategories')) ? result.extended.skullCategories : [],
		bosses: (result.hasOwnProperty('bosses')) ? result.bosses : [],
		items: (result.hasOwnProperty('items') && result.display.identifier == "xur") ? result.items : [],
		bounties: (result.hasOwnProperty('bounties')) ? result.bounties : []
	}
	return {
		type: 'SET_ACTIVITY',
		activity: activity
	}
}

export const findActivity = (activity_id) => {
 return dispatch => {
   dispatch(startLoading())
   $.get('/api/'+activity_id, (result)=>{
		dispatch(doneLoading());
		dispatch(setActivity(result));
   });
 }
}