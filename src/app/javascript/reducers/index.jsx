import { combineReducers } from 'redux';
import select from './select';
import activity from './activity';
import user from './user';
import app from './app';


const activityApp = combineReducers({
  select,
  activity,
  user,
  app,
});

export default activityApp;
