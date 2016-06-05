import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import React from 'react';

import { shallow } from 'enzyme';
import CharactersContainer from '../../src/app/javascript/containers/CharactersContainer.jsx';

import { FullCharacterList, CharacterNotFound } from './mock.jsx';

const mockStore = configureStore();

describe('(Container) Characters', () => {
  let store;
  let wrapper;

  it('should expect .characterComponent to exist', ()=>{
    store = mockStore({user: FullCharacterList});
    wrapper = shallow(<Provider store={store}><CharactersContainer /></Provider>);
    expect(wrapper.find('.characterComponent')).to.exist;
  });

  it('should expect Error Screen to exists when character not found', ()=>{
    store = mockStore({user: CharacterNotFound});
    wrapper = shallow(<Provider store={store}><CharactersContainer /></Provider>);
    expect(wrapper.find('.backToLoginComponent')).to.exist;
  })


});
