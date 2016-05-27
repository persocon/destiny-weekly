import React, { PropTypes } from 'react';
import LoadingIcon from './icons/LoadingIconComponent';
import ExitIcon from './icons/ExitIconComponent';
import GithubIcon from './icons/GithubComponent';

class IconComponent extends React.Component {
  render() {
    switch (this.props.icon) {
      case 'loading': {
        return (<LoadingIcon />);
      }
      case 'exit': {
        return (<ExitIcon />);
      }
      case 'github': {
        return (<GithubIcon />);
      }
      default: {
        return ('<div>iconNotFound</div>');
      }
    }
  }
}

IconComponent.propTypes = {
  icon: PropTypes.string,
};

export default IconComponent;
