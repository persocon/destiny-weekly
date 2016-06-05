import 'isomorphic-fetch';
import nock from 'nock';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import { activityFull, userLoggedIn } from './mock.jsx';

import * as actions from '../../src/app/javascript/actions/activity.jsx';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('(Async Actions) Activity', () => {
  afterEach(() => {
    nock.cleanAll();
  });

  it('should fill in SET_ACTIVITY when fetching the right activity is done', () => {
    nock(apiUrl)
    .get('/api/nightfall/2/tkrp1986/2305843009345804418')
    .reply(200, { activity: activityFull });

    const expectedAction = {
      type: 'SET_ACTIVITY',
      activity: activityFull
    };

    const store = mockStore({
      user: userLoggedIn,
      select: {
        activity: 'nightfall',
      }
    });

    const result = store.dispatch(actions.findActivity(apiUrl))
    result.then(()=>{
      expect(store.getActions()[0]).to.equal(expectedAction);
    });
  });

});
