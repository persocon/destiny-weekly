import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import nock from 'nock';

import * as actions from '../../src/app/javascript/actions/activity.jsx';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

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
