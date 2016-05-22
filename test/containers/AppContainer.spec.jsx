import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store'
import React from 'react';
import { mount } from 'enzyme'
import AppContainer from '../../src/app/javascript/containers/AppContainer.jsx';

const mockStore = configureStore();

describe('(Container) App (login screen)', () => {
  let store;
  let wrapper;
  beforeEach(()=>{
    store = mockStore({app: { screen: 'login'}});
    wrapper = mount(<Provider store={store}><AppContainer /></Provider>);
  })
  it('should expect .appComponent to exist', ()=>{
    expect(wrapper.find('.appComponents')).to.exist;
  });
  it('should expect .loginComponent to exist', ()=>{
    expect(wrapper.find('.loginComponent')).to.exist;
  });
});
