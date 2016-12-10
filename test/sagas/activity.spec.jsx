import { select, call, put } from 'redux-saga/effects';
import { userLoggedIn, activitySmall, getActivityInfo } from '../actions/mock.jsx';
import { doGetActivity } from '../../src/app/javascript/sagas/activity.jsx';
import { selectUserInfo, selectActivity } from '../../src/app/javascript/sagas/selectors.jsx';
import { fnFetch } from '../../src/app/javascript/services/api';

const dispatch = sinon.spy();
const getState = (state) => ({
  username: userLoggedIn.user_info.username,
  platform: userLoggedIn.user_info.platform,
  characterId: userLoggedIn.user_info.character_id,
  activity: 'nightfall'
});
const iterator = doGetActivity();

describe('(Sagas) Activity', () => {
  it('should dispatch activity saga select for activity identifier', () => {
    expect(iterator.next(selectActivity).value).to.eql(select(selectActivity));
  });

  it('should dispatch activity sagas put in loading mode', () => {
    expect(iterator.next(getState()).value).to.eql(put({type: 'START_LOADING'}));
  });

  it('should dispatch activity sagas call', () => {
    const fetchUrl = `nightfall/2/tkrp1986/2305843009345804418`;
    expect(iterator.next(getState()).value).to.eql(call(fnFetch, fetchUrl))
  });

  it('should dispatch activity sagas put', () => {
    expect(iterator.next(activitySmall).value).to.eql(put({type: 'SET_ACTIVITY', activity: activitySmall}))
  });
});
