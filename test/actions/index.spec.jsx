import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import nock from 'nock';

import * as actions from '../../src/app/javascript/actions/index.jsx';

const middlewares = [ thunk ];
const mockStore = configureMockStore(middlewares);


describe('Actions', () => {
  it('should create an action to changeApiUrl', () => {
    const activity = 'elderschallenge';
    const expectedAction = {
      type: 'CHANGE_API_URL',
  		activity
    }
    expect(actions.changeApiUrl(activity)).to.eql(expectedAction);
  });
});

describe('Async Actions', () => {
  afterEach(() => {
    nock.cleanAll();
    nock.disableNetConnect();
    nock.enableNetConnect('127.0.0.1');
  });

  it('fill in GET_OPTIONS when fetching all options is done', (done) => {
    nock('http://localhost:8888')
    .get('/api/selectActivity')
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
      }]
    };

    const store = mockStore({}, expectedAction, done);
    store.dispatch(actions.getOptions())
      .then(()=>{
        expect(store.getActions()[0]).to.eql(expectedAction);
        done();
      });
  });

});
