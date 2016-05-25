import fetch from 'isomorphic-fetch';

const resetSelect = () => {
	return {
		type: 'RESET_SELECT'
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
	return (dispatch, getState) => {
		const {user} = getState();
		if(!user){
			return Promise.resolve();
		}
  	return fetch('/api/selectActivity/'+user.user_info.platform+'/'+user.user_info.username+'/'+user.user_info.character_id)
		  .then(resolve => resolve.json())
			.then( json => {
				json.unshift({advisorTypeCategory: "Selecione Uma Atividade", identifier: "", disabled: "disabled"});
				dispatch(setOptions(json));
			}
		)
 }
}

export {changeApiUrl, getOptions, resetSelect};
