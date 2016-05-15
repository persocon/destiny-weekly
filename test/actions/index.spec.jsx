import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import nock from 'nock';

import * as actions from '../../src/app/javascript/actions/index.jsx';

const middlewares = [ thunk ];
const mockStore = configureMockStore(middlewares);

describe('(Actions) App', () => {
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

    const store = mockStore({});
    store.dispatch(actions.getOptions())
      .then(()=>{
        expect(store.getActions()[0]).to.eql(expectedAction);
      });
  });

});

describe('(Async Action) User form', () => {
  it('should fill in SET_CHARACTER_LIST when fetching is done', () => {
    nock('http://localhost:8888')
    .get('/api/getCharacterList/1/tkrp1986')
    .reply(200, {characters: [
        {
            "character_id": "2305843009271058982"
        },
        {
          "character_id": "2305843009345804418"
        },
        {
          "character_id": "2305843009359370836"
        }
      ]
    });

    const expectedState = {
      type: 'SET_CHARACTER_LIST',
      character_list: [
          {
              "character_id": "2305843009271058982"
          },
          {
            "character_id": "2305843009345804418"
          },
          {
            "character_id": "2305843009359370836"
          }
        ]
    }

    const store = mockStore({});
    store.dispatch(actions.getOptions())
      .then(()=>{
        expect(store.getAction()[0]).to.eql(expectedState);
      })

  });

});
