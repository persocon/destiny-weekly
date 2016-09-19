import 'isomorphic-fetch';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import { activityFull, userLoggedIn } from './mock.jsx';

import * as actions from '../../src/app/javascript/actions/activity.jsx';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const dispatch = sinon.spy();
const getState = () => ({
  select: {
    activity: 'dailychapter',
  },
  user: userLoggedIn,
});

describe('(Actions) Activity', () => {
  it('should create an action to resetActivity', () => {
    const expectedAction = {
      type: 'RESET_ACTIVITY'
    }
    expect(actions.resetActivity(apiUrl)).to.eql(expectedAction);
  });

  it('should dispatch a correctly formatted findActivity action', () => {
    actions.findActivity()(dispatch, getState);
    expect(dispatch).to.have.been.called;
    dispatch.reset();
  });
});
