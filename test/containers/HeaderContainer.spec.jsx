import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store'
import React from 'react';
import { shallow } from 'enzyme'
import { PureHeaderContainer } from '../../src/app/javascript/containers/HeaderContainer.jsx';

import { ScreenLogin } from './mock.jsx';

const mockStore = configureStore();

describe('(Container) HeaderContainer', () => {
  let props;
  let wrapper;
  let handleLogOut;
  let resetApp;
  beforeEach(()=>{
    handleLogOut = sinon.spy();
    resetApp = sinon.spy();
    props = {resetApp: resetApp};
    wrapper = shallow(<PureHeaderContainer {...props} />);
  })

  it('should expect .menuComponent to exist', () => {
    expect(wrapper.find('.menuComponent')).to.exist;
    expect(wrapper.find('.menuComponent').length).to.eql(1);
  });

});
