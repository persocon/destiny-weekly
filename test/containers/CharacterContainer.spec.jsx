import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import React from 'react';

import { shallow, mount } from 'enzyme';
import CharactersContainer, { PureCharacterContainer } from '../../src/app/javascript/containers/CharactersContainer.jsx';

import { FullCharacterList, CharacterNotFound } from './mock.jsx';

const mockStore = configureStore();

describe('(Container) Characters', () => {
  let store;
  let props;
  let wrapper;

  it('should expect .characterComponent to exist', () => {
    store = mockStore({user: FullCharacterList});
    wrapper = shallow(<Provider store={store}><CharactersContainer /></Provider>);
    expect(wrapper.find('.characterComponent')).to.exist;
  });

  it('should expect Error Screen to exists when character not found', () => {
    store = mockStore({user: CharacterNotFound});
    wrapper = shallow(<Provider store={store}><CharactersContainer /></Provider>);
    expect(wrapper.find('.backToLoginComponent')).to.exist;
  });

  it('should expect .characterListItem to exist', () => {
    store = mockStore({user: FullCharacterList});
    wrapper = shallow(<Provider store={store}><CharactersContainer /></Provider>);
    expect(wrapper.find('.characterListItem')).to.exist;
  });

  it('should expect characterContainer props to exist', () => {
    store = mockStore({user: FullCharacterList});
    wrapper = shallow(<CharactersContainer store={store} />);
    expect(wrapper.props().character_list).to.eql(FullCharacterList.character_list);
  });

  it('should expect characterContainer get setCharacterListRequest', () => {
    const onInit = () => {
      return FullCharacterList;
    }
    store = mockStore({user: FullCharacterList, setCharacterListRequest: onInit});
    wrapper = shallow(<CharactersContainer store={store} />);
    expect(wrapper.props().setCharacterListRequest).to.be.a('function');
  });

});
