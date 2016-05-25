
const resetApp = () => {
	return {
		type: 'RESET_APP'
	}
}

const setAppScreen = (screen) => {
	return {
		type: 'SET_APP_SCREEN',
		screen
	}
}

const getAppScreen = () => {
	return {
		type: 'GET_APP_SCREEN'
	}
}

export {setAppScreen, getAppScreen, resetApp};
