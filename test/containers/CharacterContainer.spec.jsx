import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import React from 'react';

import { mount } from 'enzyme';
import CharactersContainer from '../../src/app/javascript/containers/CharactersContainer.jsx';

const mockStore = configureStore();

describe('(Container) Characters', () => {
  let store;
  let wrapper;
  beforeEach(()=>{
    store = mockStore({
      user: {
        character_list: [],
        user_info: {
          platform: '',
          username: '',
          character_id: ''
        }
      }
    });
    wrapper = mount(<Provider store={store}><CharactersContainer /></Provider>);
  })
  it('should expect .characterComponent to exist', ()=>{
    expect(wrapper.find('.characterComponent')).to.exist;
  });

});
