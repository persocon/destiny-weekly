import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store'
import React from 'react';
import { mount } from 'enzyme'
import AppContainer from '../../src/app/javascript/containers/AppContainer.jsx';

import { ScreenLogin } from './mock.jsx';

const mockStore = configureStore();

describe('(Container) App (login screen)', () => {
  let store;
  let wrapper;

  beforeEach(() => {
    store = mockStore({app: ScreenLogin});
    wrapper = mount(<Provider store={store}><AppContainer /></Provider>);
  })

  it('should expect .appComponent to exist', ()=>{
    expect(wrapper.find('.appComponents')).to.exist;
  });

  it('should expect .loginComponent to exist', ()=>{
    expect(wrapper.find('.loginComponent')).to.exist;
  });

  it('should expect .loginComponent to have a submit button', ()=>{
    expect(wrapper.find('.loginComponentSubmit')).to.exist;
  });

});
