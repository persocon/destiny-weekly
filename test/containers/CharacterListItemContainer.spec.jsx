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
  let setCharacterId;
  let setAppScreen;

  beforeEach(() => {
    setCharacterId = sinon.spy();
    setAppScreen = sinon.spy();
    props = {
      character: SingleCharacter,
      setCharacterId: setCharacterId,
      setAppScreen: setAppScreen,
    };
    wrapper = shallow(<PureCharacterListItemContainer {...props} />);
  })

  it('should expect characterListItem props to exist', () => {
    expect(wrapper.props().character).to.eql(SingleCharacter.character);
  });

});
