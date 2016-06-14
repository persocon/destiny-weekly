import React from 'react';
import { shallow } from 'enzyme'
import GhostIconComponent from '../../../src/app/javascript/components/icons/GhostIconComponent.jsx';

describe('(Components/Icon) GhostIconComponent', () => {
  let wrapper;
  beforeEach(()=>{
    wrapper = shallow(<GhostIconComponent />);
  })
  it('should expect svg to exist', ()=>{
    expect(wrapper.find('svg')).to.exist;
  });
});
