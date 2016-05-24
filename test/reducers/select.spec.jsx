import reducer from '../../src/app/javascript/reducers/select.jsx';

describe('(Reducer) Select', () => {
  it('should return the initial state', () => {
    const initialState = {
    	activity: 'nightfall',
    	options: [{advisorTypeCategory: 'Carregando...'}]
    }
    expect(reducer(undefined, {})).to.eql(initialState)
  });

  it('should handle change api url', () => {
    const expectedState = 'elderschallenge';
    expect(
      reducer({activity: expectedState}, {
        type: 'CHANGE_API_URL',
        activity: expectedState
      })
    ).to.eql({
      activity: expectedState
    })
  });
});
