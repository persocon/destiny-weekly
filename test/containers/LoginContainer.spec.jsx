import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import React from 'react';

import { mount } from 'enzyme';
import LoginContainer from '../../src/app/javascript/containers/LoginContainer.jsx';
import { ScreenLogin } from './mock.jsx';

const mockStore = configureStore();

describe('(Container) Login', () => {
  let store;
  let wrapper;
  beforeEach(()=>{
    store = mockStore({app: ScreenLogin});
    wrapper = mount(<Provider store={store}><LoginContainer /></Provider>);
  })
  it('should expect .loginComponent to exist', ()=>{
    expect(wrapper.find('.loginComponent')).to.exist;
  });
  it('should expect .loginComponentText to exist', ()=>{
    expect(wrapper.find('.loginComponentText')).to.exist;
  });
  it('should expect select to exist', ()=>{
    expect(wrapper.find('.platform')).to.exist;
  });
  it('should expect submit to exist', ()=>{
    expect(wrapper.find('.loginComponentSubmit')).to.exist;
  });
});
