import { combineReducers } from 'redux';
import select from './select.jsx';
import activity from './activity.jsx';


const activityApp = combineReducers({
	select,
	activity
});

export default activityApp;