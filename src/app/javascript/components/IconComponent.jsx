import React, { PropTypes } from 'react';
import LoadingIcon from './icons/LoadingIconComponent';
import ExitIcon from './icons/ExitIconComponent';
import GithubIcon from './icons/GithubComponent';
import GhostIcon from './icons/GhostIconComponent';

function IconComponent(props) {
  switch (props.icon) {
    case 'loading': {
      return (<LoadingIcon />);
    }
    case 'exit': {
      return (<ExitIcon />);
    }
    case 'github': {
      return (<GithubIcon />);
    }
    case 'ghost': {
      return (<GhostIcon />);
    }
    default: {
      return (<div>iconNotFound</div>);
    }
  }
}

IconComponent.propTypes = {
  icon: PropTypes.string,
};

export default IconComponent;
