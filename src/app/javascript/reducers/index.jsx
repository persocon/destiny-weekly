import { combineReducers } from 'redux';
import select from './select';
import activity from './activity';
import user from './user';


const activityApp = combineReducers({
	select,
	activity,
	user
});

export default activityApp;
