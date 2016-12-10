import { takeEvery } from 'redux-saga';
import { call, put, select } from 'redux-saga/effects';
import * as Api from '../services/api';
import { selectActivity } from './selectors';


export function* doGetActivity() {
  const { activity, username, platform, characterId } = yield select(selectActivity);
  yield put({ type: 'START_LOADING' });

  const fetchUrl = `${activity}/${platform}/${username}/${characterId}`;
  const fetchedActivity = yield call(Api.fnFetch, fetchUrl);

  yield put({ type: 'SET_ACTIVITY', activity: fetchedActivity });
}

export function* getActivity() {
  yield* takeEvery('SET_ACTIVITY_REQUEST', doGetActivity);
}
