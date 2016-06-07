import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import React from 'react';

import { shallow } from 'enzyme';
import { PureCharacterListItemContainer } from '../../src/app/javascript/containers/CharacterListItemContainer.jsx';

import { SingleCharacter } from './mock.jsx';

const mockStore = configureStore();

describe('(Container) CharacterListItemContainer', () => {
  let wrapper;
  let props;
  let handleClick;

  beforeEach(() => {
    handleClick = sinon.spy();
    props = {character: SingleCharacter, handleClick: handleClick};
    wrapper = shallow(<PureCharacterListItemContainer {...props} />);
  })

  it('should expect characterListItem props to exist', () => {
    expect(wrapper.props().character).to.eql(SingleCharacter.character);
  });

  it('should expect characterListItem handleClick', () => {
    expect(wrapper.find('a').length).to.eql(1);
    wrapper.find('a').simulate('click');
    expect(handleClick.calledOnce).to.be.true;
  });
});
