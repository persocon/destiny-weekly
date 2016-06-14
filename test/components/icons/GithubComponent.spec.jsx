import React from 'react';
import { shallow } from 'enzyme'
import GithubComponent from '../../../src/app/javascript/components/icons/GithubComponent.jsx';

describe('(Components/Icon) GithubComponent', () => {
  let wrapper;
  beforeEach(()=>{
    wrapper = shallow(<GithubComponent />);
  })
  it('should expect svg to exist', ()=>{
    expect(wrapper.find('svg')).to.exist;
  });
});
