import reducer from '../../src/app/javascript/reducers/select.jsx';

describe('(Reducer) Select', () => {
  it('should return the initial state', () => {
    const initialState = {
    	activity: 'nightfall',
    	options: [{title: 'Carregando...', activities: []}]
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
    const options = [
      {
        title: 'vanguard',
        activities: [
          { identifier: 'nightfall' }
        ]
      },
      {
        title:'crucible',
        activities: [
          { identifier: 'ironbanner' }
        ]
      }
    ];
    expect(
      reducer({options},{
        type: 'GET_OPTIONS',
        options
      })
    ).to.eql({ options });
  });
});
