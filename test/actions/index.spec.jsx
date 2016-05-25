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

describe('(Async Actions) Activity', () => {
  afterEach(() => {
    nock.cleanAll();
    nock.disableNetConnect();
    nock.enableNetConnect('127.0.0.1');
  });

  it('should fill in SET_ACTIVITY when fetching the right activity is done', () => {
    nock('http://localhost:8888')
    .get('/api/nightfall/2/tkrp1986')
    .reply(200, {activity: {
              status: {
                expirationDate: "2016-05-24T09:00:00Z",
                startDate: "2016-05-17T09:00:00Z",
                expirationKnown: true,
                active: true
              },
              display: {
                categoryHash: 1852922491,
                identifier: "nightfall",
                icon: "/img/theme/destiny/icons/node_strike_nightfall.png",
                image: "/img/theme/destiny/bgs/pgcrs/shield_brothers.jpg",
                advisorTypeCategory: "Assalto do Anoitecer",
                activityHash: 355200465,
                playlistHash: 1749151224,
                destinationHash: 2897855902,
                factionHash: 468098704,
                placeHash: 596872852
              }
            }
        });

    const expectedAction = {
      type: 'SET_ACTIVITY',
      activity: {
        status: {
          expirationDate: "2016-05-24T09:00:00Z",
          startDate: "2016-05-17T09:00:00Z",
          expirationKnown: true,
          active: true
        },
        display: {
          categoryHash: 1852922491,
          identifier: "nightfall",
          icon: "/img/theme/destiny/icons/node_strike_nightfall.png",
          image: "/img/theme/destiny/bgs/pgcrs/shield_brothers.jpg",
          advisorTypeCategory: "Assalto do Anoitecer",
          activityHash: 355200465,
          playlistHash: 1749151224,
          destinationHash: 2897855902,
          factionHash: 468098704,
          placeHash: 596872852
        }
      }
    };

    const store = mockStore({});
    store.dispatch(actions.findActivity())
      .then(()=>{
        expect(store.getActions()[0]).should.equal(expectedAction);
      });
  });

});

describe('(Actions) User', () => {
  it('should create an action to setCharacterId', () => {
    const character_id = 123456789;
    const expectedAction = {
      type: 'SET_USER_CHARACTER',
  		user_info: {
        character_id
      }
    }
    expect(actions.setCharacterId(character_id)).to.eql(expectedAction);
  });

  it('should create an action to getCharacterId', () => {
    const expectedAction = {
      type: 'GET_USER_CHARACTER'
    }
    expect(actions.getCharacterId()).to.eql(expectedAction);
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
        expect(store.getAction()[0]).should.equal(expectedState);
      })

  });

});
