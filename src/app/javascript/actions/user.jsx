import fetch from 'isomorphic-fetch';

const resetUser = () => {
	return {
		type: 'RESET_USER'
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

const setCharacterList = (result) => {
	let character_list = result;
	return {
		type: 'SET_CHARACTER_LIST',
		character_list
	}
}

const getCharacterList = () => {
	return (dispatch, getState) => {
		const { user } = getState();
		if(!user){
			return Promise.resolve();
		}

		return fetch('/api/getCharacterList/'+user.user_info.platform+'/'+user.user_info.username)
		.then(response => response.json())
		.then(json => {
				dispatch(setCharacterList(json));
		})
	}
}

const setCharacterId = (character_id) => {
	return {
		type: 'SET_USER_CHARACTER',
		user_info: {
			character_id
		}
	}
}

const getCharacterId = () => {
	return {
		type: 'GET_USER_CHARACTER'
	}
}

export {setCharacterId, getCharacterId, getCharacterList, resetUser, setUser};
