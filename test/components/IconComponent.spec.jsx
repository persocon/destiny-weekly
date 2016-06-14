import React from 'react';
import { shallow } from 'enzyme'
import IconComponent from '../../src/app/javascript/components/IconComponent.jsx'

describe('(Components) IconComponent', () => {
  let props;
  let wrapper;
  const icons = ['loading', 'exit', 'github', 'ghost'];

  icons.map((icon) => {
    const text = `should expect ${icon} icon svg to exist`;
    it(text, ()=>{
      props = { icon: icon };
      wrapper = shallow(<IconComponent {...props} />);
      expect(wrapper.find('svg')).to.exist;
    });
  });

  it('should expect a div', () => {
    wrapper = shallow(<IconComponent />);
    expect(wrapper.find('div')).to.exist;
  });

  it('should expect div to have text iconNotFound', () => {
    wrapper = shallow(<IconComponent />);
    expect(wrapper.find('div').text()).to.equal('iconNotFound');
  });

});
