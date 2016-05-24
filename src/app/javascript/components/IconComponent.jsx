import React from 'react';
import LoadingIcon from './icons/LoadingIconComponent';
import ExitIcon from './icons/ExitIconComponent';
import GithubIcon from './icons/GithubComponent';

class IconComponent extends React.Component {
	render() {
    switch(this.props.icon) {
      case 'loading':
        return (<LoadingIcon />);
        break;
      case 'exit':
    		return (<ExitIcon />);
        break;
      case 'github':
        return (<GithubIcon />);
        break;
      default:
        return('<div>iconNotFound</div>');
        break;
    }
	}
};

export default IconComponent;
