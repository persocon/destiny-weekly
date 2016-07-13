import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import nock from 'nock';
import { userLoggedIn } from './mock.jsx';

import * as actions from '../../src/app/javascript/actions/select.jsx';

const middlewares = [ thunk ];
const mockStore = configureMockStore(middlewares);

describe('(Actions) Select', () => {
  it('should create an action to changeApiUrl', () => {
    const activity = 'elderschallenge';
    const expectedAction = {
      type: 'CHANGE_API_URL',
  		activity
    }
    expect(actions.changeApiUrl(activity)).to.eql(expectedAction);
  });

  it('should create an action to resetSelect', () => {
    const expectedAction = {
      type: 'RESET_SELECT'
    }
    expect(actions.resetSelect()).to.eql(expectedAction);
  });
});

describe('(Async Actions) Select', function() {
  beforeEach(function() {
    nock.disableNetConnect();
  });

  afterEach(function() {
    nock.cleanAll();
    nock.enableNetConnect();
  });

  // it('should fill in GET_OPTIONS when fetching all options is done', function() {
  //   nock(apiUrl)
  //   .get('/api/selectActivity/2/tkrp1986')
  //   .reply(200, {options: [
  //           {
  //             value: "nightfall"
  //           }
  //         ]
  //     });
  //
  //   const expectedAction = {
  //     type: 'GET_OPTIONS',
  //     options: [
  //       {
  //         value: "nightfall"
  //       }
  //     ]
  //   };
  //
  //   const store = mockStore({ user: userLoggedIn }, expectedAction);
  //   return store.dispatch(actions.getOptions(apiUrl))
  //     .then(function() {
  //       console.log(store.getActions()[0]);
  //       expect(store.getActions()[0]).should.eventually.equal(expectedAction);
  //     });
  // });

});
