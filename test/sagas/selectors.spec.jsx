import { userLoggedIn, selectActivityMock } from '../actions/mock.jsx';
import { selectUserInfo, selectActivity } from '../../src/app/javascript/sagas/selectors.jsx';

const getState = (state) => ({
  user: userLoggedIn,
  select: {
    activity: 'nightfall'
  }
});

describe('(Sagas) Selectors', () => {
  it('should use selector getUserInfo', () => {
    expect(selectUserInfo(getState())).to.eql(userLoggedIn);
  });

  it('should use selector selectActivity', () => {
    expect(selectActivity(getState())).to.eql(selectActivityMock);
  });
});
