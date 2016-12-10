import * as actions from '../../src/app/javascript/actions/activity.jsx';

describe('(Actions) Activity', () => {
  it('should create an action to setActivityRequest', () => {
    const expectedAction = {
      type: 'SET_ACTIVITY_REQUEST'
    }
    expect(actions.setActivityRequest()).to.eql(expectedAction);
  });
});
