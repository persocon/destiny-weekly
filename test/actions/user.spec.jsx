import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import nock from 'nock';
import { userLoggedIn } from './mock.jsx';

import * as actions from '../../src/app/javascript/actions/user.jsx';

const middlewares = [ thunk ];
const mockStore = configureMockStore(middlewares);

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
    nock(apiUrl)
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

    const store = mockStore({
      user: {
        character_list: [],
        user_info: userLoggedIn
      }
    });
    store.dispatch(actions.getCharacterList(apiUrl))
      .then(()=>{
        expect(store.getAction()[0]).should.equal(expectedState);
      })

  });

});
