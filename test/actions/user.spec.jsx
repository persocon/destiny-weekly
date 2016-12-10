import { userLoggedIn } from './mock';
import * as actions from '../../src/app/javascript/actions/user.jsx';

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

  it('should create an action to setCharacterListRequest', () => {
    const expectedAction = {
      type: 'SET_CHARACTER_LIST_REQUEST'
    }
    expect(actions.setCharacterListRequest()).to.eql(expectedAction);
  });

  it('should create an action to getUser', () => {
    const expectedAction = {
      type: 'GET_USER',
  		user_info: userLoggedIn.user_info,
    }
    expect(actions.getUser(userLoggedIn.user_info)).to.eql(expectedAction);
  });

  it('should create an action to setUser', () => {
    const expectedAction = {
      type: 'SET_USER',
  		user_info: {
        platform: userLoggedIn.user_info.platform,
        username: userLoggedIn.user_info.username,
      },
    }
    expect(actions.setUser(userLoggedIn.user_info.platform, userLoggedIn.user_info.username)).to.eql(expectedAction);
  });

});
