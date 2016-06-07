import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store'
import React from 'react';
import { shallow } from 'enzyme'
import ActivityContainer from '../../src/app/javascript/containers/ActivityContainer.jsx';

import { InitActivity, FullActivity } from './mock.jsx';

const mockStore = configureStore();

describe('(Container) ActivityContainer', () => {
  let store;
  let wrapper;
  beforeEach(()=>{
    const getInitialActivity = () => {
      return InitActivity;
    }
    store = mockStore({activity: FullActivity, getInitialActivity: getInitialActivity});
    wrapper = shallow(<ActivityContainer store={store} />);
  })
  it('should expect .activityComponent to exist', ()=>{
    expect(wrapper.find('.activityComponent')).to.exist;
  });
  it('should expect .boxContent to exist', ()=>{
    expect(wrapper.find('.boxContent')).to.exist;
  });
});
