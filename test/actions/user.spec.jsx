import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { userLoggedIn, getCharacterList } from './mock.jsx';

import * as actions from '../../src/app/javascript/actions/user.jsx';

const middlewares = [ thunk ];
const mockStore = configureMockStore(middlewares);
const dispatch = sinon.spy();
const getState = () => ({
  user: userLoggedIn,
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

  it('should create an action to resetUser', () => {
    const expectedAction = {
      type: 'RESET_USER'
    }
    expect(actions.resetUser()).to.eql(expectedAction);
  });

  it('should dispatch a correctly formatted getCharacterList action', () => {
    actions.getCharacterList()(dispatch, getState);
    expect(dispatch).to.have.been.called;
    dispatch.reset();
  });

});
