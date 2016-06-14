import React from 'react';
import { shallow } from 'enzyme'
import ExitIconComponent from '../../../src/app/javascript/components/icons/ExitIconComponent.jsx';

describe('(Components/Icon) ExitIconComponent', () => {
  let wrapper;
  beforeEach(()=>{
    wrapper = shallow(<ExitIconComponent />);
  })
  it('should expect svg to exist', ()=>{
    expect(wrapper.find('svg')).to.exist;
  });
});
