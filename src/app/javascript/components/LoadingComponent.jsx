import React from 'react';
import IconComponent from './IconComponent';

class LoadingComponent extends React.Component {
	render() {
		return (
			<div className="loadingComponent top-bar">
        <IconComponent icon='loading' />
      </div>
		)
	}
}

export default LoadingComponent;
