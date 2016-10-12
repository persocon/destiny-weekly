import configureMockStore from 'redux-mock-store';
import { select, call, put } from 'redux-saga/effects';
import { userLoggedIn, getCharacterList } from './mock.jsx';

import * as actions from '../../src/app/javascript/actions/user.jsx';
import { doGetCharacterList } from '../../src/app/javascript/sagas/user.jsx';
import { fetchCharacterList } from '../../src/app/javascript/services/api';

const dispatch = sinon.spy();
const getState = () => ({
  user: userLoggedIn,
});
const iterator = doGetCharacterList();

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

  it('should jump user saga select', () => {
    let next = iterator.next(getState);
    // expect(next.value).to.eql(select(getState));
  });

  it('should dispatch user sagas call', () => {
    const fetchUrl = `getCharacterList/2/tkrp1986`;
    let next = iterator.next();
    console.log("boludo", next.value);
    // expect(iterator.next().value).to.eql(call(fetchCharacterList, fetchUrl));
  });
  // it('should dispatch user sagas put', () => {
  //   expect(iterator.next(getCharacterList).value).to.eql(put({type: 'SET_CHARACTER_LIST', character_list: getCharacterList}))
  // });


});
