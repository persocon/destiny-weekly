import reducer from '../../src/app/javascript/reducers/app.jsx';

describe('(Reducer) App', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).to.eql({screen: 'login'});
  });

  it('should handle set app screen', () => {
    const expectedState = 'login';
    expect(
      reducer({screen: expectedState}, {
        type: 'SET_APP_SCREEN',
        screen: expectedState
      })
    ).to.eql({
      screen: expectedState
    })
  });
});
