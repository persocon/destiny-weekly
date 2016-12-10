import * as actions from '../../src/app/javascript/actions/select.jsx';

describe('(Actions) Select', () => {
  it('should create an action to changeApiUrl', () => {
    const activity = 'elderschallenge';
    const expectedAction = {
      type: 'CHANGE_API_URL',
  		activity
    }
    expect(actions.changeApiUrl(activity)).to.eql(expectedAction);
  });

  it('should create an action to getOptionsRequest', () => {
    const expectedAction = {
      type: 'GET_OPTIONS_REQUEST',
    }
    expect(actions.getOptionsRequest()).to.eql(expectedAction);
  });

});
