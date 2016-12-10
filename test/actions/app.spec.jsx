import * as actions from '../../src/app/javascript/actions/app.jsx';
describe('(Actions) App', () => {
  it('should create an action to resetApp', () => {
    const expectedAction = {
      type: 'RESET_APP'
    }
    expect(actions.resetApp()).to.eql(expectedAction);
  });

  it('should create an action to getAppScreen', () => {
    const expectedAction = {
      type: 'GET_APP_SCREEN'
    }
    expect(actions.getAppScreen()).to.eql(expectedAction);
  });

  it('should create an action to setAppScreen', () => {
    const screen = 'login';
    const expectedAction = {
      type: 'SET_APP_SCREEN',
      screen
    }
    expect(actions.setAppScreen(screen)).to.eql(expectedAction);
  });
});
