import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { userLoggedIn } from './mock.jsx';

import * as actions from '../../src/app/javascript/actions/select.jsx';

const middlewares = [ thunk ];
const mockStore = configureMockStore(middlewares);
const dispatch = sinon.spy();
const getState = () => ({
  user: userLoggedIn,
});

describe('(Actions) Select', () => {
  it('should create an action to changeApiUrl', () => {
    const activity = 'elderschallenge';
    const expectedAction = {
      type: 'CHANGE_API_URL',
  		activity
    }
    expect(actions.changeApiUrl(activity)).to.eql(expectedAction);
  });

  it('should create an action to resetSelect', () => {
    const expectedAction = {
      type: 'RESET_SELECT'
    }
    expect(actions.resetSelect()).to.eql(expectedAction);
  });

  it('should dispatch a correctly formatted getOptions action', () => {
    actions.getOptions()(dispatch, getState);
    expect(dispatch).to.have.been.called;
    dispatch.reset();
  });

});
