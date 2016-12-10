import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store'
import React from 'react';
import { shallow } from 'enzyme'
import { PureBackToLoginContainer } from '../../src/app/javascript/containers/BackToLoginContainer.jsx';

import { ScreenLogin } from './mock.jsx';

const mockStore = configureStore();

describe('(Container) BackToLogin', () => {
  let props;
  let wrapper;
  let handleBackToLogin;
  beforeEach(()=>{
    handleBackToLogin = sinon.spy();
    props = {resetApp: handleBackToLogin};
    wrapper = shallow(<PureBackToLoginContainer {...props} />);
  })

  it('should expect .backToLoginComponent to exist', () => {
    expect(wrapper.find('.backToLoginComponent')).to.exist;
    expect(wrapper.find('.backToLoginComponent').length).to.eql(1);
  });

  it('should expect to handleBackToLogin to be clickable', () => {
      expect(wrapper.find('a').length).to.eql(1);
      wrapper.find('a').simulate('click', { preventDefault() {} });
      expect(handleBackToLogin.calledOnce).to.be.true;
  });

});
