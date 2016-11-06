import { select, call, put } from 'redux-saga/effects';
import { userLoggedIn, getCharacterList } from '../actions/mock.jsx';
import { doGetCharacterList, getUserInfo } from '../../src/app/javascript/sagas/user.jsx';
import { fnFetch } from '../../src/app/javascript/services/api';

const dispatch = sinon.spy();
const getState = (state) => ({
  user: userLoggedIn,
});
const iterator = doGetCharacterList();

describe('(Sagas) User', () => {
  it('should dispatch user saga select', () => {
    expect(iterator.next(getUserInfo).value).to.eql(select(getUserInfo));
  });

  it('should dispatch user sagas call', () => {
    const fetchUrl = `getCharacterList/2/tkrp1986`;
    expect(iterator.next(getState().user).value).to.eql(call(fnFetch, fetchUrl))
  });
  it('should dispatch user sagas put', () => {
    expect(iterator.next(getCharacterList).value).to.eql(put({type: 'SET_CHARACTER_LIST', character_list: getCharacterList}))
  });
});
