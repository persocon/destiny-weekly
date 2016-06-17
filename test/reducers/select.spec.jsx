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

  it('should get options', () => {
    const options = [{ identifier: 'nightfall' }, { identifier: 'ironbanner' }];
    expect(
      reducer({options},{
        type: 'GET_OPTIONS',
        options
      })
    ).to.eql({ options });
  });

  it('should reset options', () => {
    const initialState = {
    	activity: 'nightfall',
    	options: [{title: 'Carregando...'}]
    }
    expect(reducer({}, {
      type: 'RESET_SELECT'
    })).to.eql(initialState)
  });
});
