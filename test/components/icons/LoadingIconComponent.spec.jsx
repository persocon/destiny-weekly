import React from 'react';
import { shallow } from 'enzyme'
import LoadingIconComponent from '../../../src/app/javascript/components/icons/LoadingIconComponent.jsx';

describe('(Components/Icon) LoadingIconComponent', () => {
  let wrapper;
  beforeEach(()=>{
    wrapper = shallow(<LoadingIconComponent />);
  })
  it('should expect svg to exist', ()=>{
    expect(wrapper.find('svg')).to.exist;
  });
});
