import { combineReducers } from 'redux';
import select from './select';
import activity from './activity';


const activityApp = combineReducers({
	select,
	activity
});

export default activityApp;
