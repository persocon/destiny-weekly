import { takeEvery } from 'redux-saga';
import { call, put, select } from 'redux-saga/effects';
import * as Api from '../services/api';
import { selectUserInfo } from './selectors';

export function* doGetOptions() {
  const { user_info } = yield select(selectUserInfo);

  yield put({ type: 'RESET_SELECT' }); // loading purpose

  const platform = user_info.platform;
  const username = user_info.username;
  const characterId = user_info.character_id;
  const fetchUrl = `selectActivity/${platform}/${username}/${characterId}`;
  const fetchedActivities = yield call(Api.fnFetch, fetchUrl);

  yield put({ type: 'GET_OPTIONS', options: fetchedActivities });
}

export function* getOptions() {
  yield* takeEvery('GET_OPTIONS_REQUEST', doGetOptions);
}
