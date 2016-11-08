import { select, call, put } from 'redux-saga/effects';
import { userLoggedIn, activitySmall } from '../actions/mock.jsx';
import { doGetOptions } from '../../src/app/javascript/sagas/select.jsx';
import { selectUserInfo } from '../../src/app/javascript/sagas/selectors.jsx';
import { fnFetch } from '../../src/app/javascript/services/api';

const dispatch = sinon.spy();
const getState = (state) => ({
  user: userLoggedIn,
});
const iterator = doGetOptions();

describe('(Sagas) Select', () => {
  it('should dispatch select saga select', () => {
    expect(iterator.next(selectUserInfo).value).to.eql(select(selectUserInfo));
  });

  it('should dispatch select sagas put in loading mode', () => {
    expect(iterator.next(getState().user).value).to.eql(put({type: 'RESET_SELECT'}));
  });

  it('should dispatch select sagas call', () => {
    const fetchUrl = `selectActivity/2/tkrp1986/2305843009345804418`;
    expect(iterator.next(getState().user).value).to.eql(call(fnFetch, fetchUrl))
  });
  it('should dispatch user sagas put', () => {
    expect(iterator.next(activitySmall).value).to.eql(put({type: 'GET_OPTIONS', options: activitySmall}))
  });
});
