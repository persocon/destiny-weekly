import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import nock from 'nock';

import * as actions from '../../src/app/javascript/actions/select.jsx';

const middlewares = [ thunk ];
const mockStore = configureMockStore(middlewares);

describe('(Actions) Select', () => {
  it('should create an action to changeApiUrl', () => {
    const activity = 'elderschallenge';
    const expectedAction = {
      type: 'CHANGE_API_URL',
  		activity
    }
    expect(actions.changeApiUrl(activity)).to.eql(expectedAction);
  });
});

describe('(Async Actions) Select', () => {
  afterEach(() => {
    nock.cleanAll();
    nock.disableNetConnect();
    nock.enableNetConnect('127.0.0.1');
  });

  it('should fill in GET_OPTIONS when fetching all options is done', () => {
    nock('http://localhost:8888')
    .get('/api/selectActivity/2/tkrp1986')
    .reply(200, {options: [
            {
              identifier: "nightfall"
            }
          ]
      });

    const expectedAction = {
      type: 'GET_OPTIONS',
      options: [
        {
        identifier: "nightfall"
        }
      ]
    };

    const store = mockStore({});
    store.dispatch(actions.getOptions())
      .then(()=>{
        expect(store.getActions()[0]).should.equal(expectedAction);
      });
  });

});
