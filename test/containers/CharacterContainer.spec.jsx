import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import React from 'react';

import { mount } from 'enzyme';
import CharactersContainer from '../../src/app/javascript/containers/CharactersContainer.jsx';

import { EmptyCharacterList, FullCharacterList, CharacterNotFound } from './mock.jsx';

const mockStore = configureStore();

describe('(Container) Characters', () => {
  let store;
  let wrapper;

  it('should expect LoadingComponent to exist while loading', ()=>{
    store = mockStore({user: EmptyCharacterList});
    wrapper = mount(<Provider store={store}><CharactersContainer /></Provider>);
    expect(wrapper.find('.loadingComponent')).to.exist;
  });

  it('should expect .characterComponent to exist', ()=>{
    store = mockStore({user: FullCharacterList});
    wrapper = mount(<Provider store={store}><CharactersContainer /></Provider>);
    expect(wrapper.find('.characterComponent')).to.exist;
  });

  it('should expect Error Screen to exists when character not found', ()=>{
    store = mockStore({user: CharacterNotFound});
    wrapper = mount(<Provider store={store}><CharactersContainer /></Provider>);
    expect(wrapper.find('.backToLoginComponent')).to.exist;
  })


});
