import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import React from 'react';

import { shallow, mount } from 'enzyme';
import CharacterListItemContainer, { PureCharacterListItemContainer } from '../../src/app/javascript/containers/CharacterListItemContainer.jsx';

import { SingleCharacter } from './mock.jsx';

const mockStore = configureStore();

describe('(Container) CharacterListItemContainer', () => {
  let store;
  let wrapper;
  let props;

  it('should expect characterListItem props to exist', () => {
    const handleClick = sinon.spy();
    props = {character: SingleCharacter, handleClick: handleClick};
    wrapper = shallow(<PureCharacterListItemContainer {...props} />);
    expect(wrapper.props().character).to.eql(SingleCharacter.character);
  });

  it('should expect characterListItem handleClick', () => {
    const handleClick = sinon.spy();
    props = {character: SingleCharacter, handleClick: handleClick};
    wrapper = shallow(<PureCharacterListItemContainer {...props} />);
    expect(wrapper.find('a').length).to.eql(1);
    wrapper.find('a').simulate('click');
    expect(handleClick.calledOnce).to.be.true;
  });
});
