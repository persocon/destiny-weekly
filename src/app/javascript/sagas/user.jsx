import { takeEvery } from 'redux-saga';
import { call, put, select } from 'redux-saga/effects';
import * as Api from '../services/api';
import { selectUserInfo } from './selectors';

export function* doGetCharacterList() {
  const { user_info } = yield select(selectUserInfo);

  const fetchUrl = `getCharacterList/${user_info.platform}/${user_info.username}`;
  const fetchedCharacterLists = yield call(Api.fnFetch, fetchUrl);

  yield put({ type: 'SET_CHARACTER_LIST', character_list: fetchedCharacterLists });
}

export function* getCharacterList() {
  yield* takeEvery('SET_CHARACTER_LIST_REQUEST', doGetCharacterList);
}
