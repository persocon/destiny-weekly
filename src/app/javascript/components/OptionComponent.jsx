import React from 'react';

class OptionComponent extends React.Component {
	render() {
		return (
			<option value={this.props.identifier} disabled={this.props.disabled}>{this.props.title}</option>
		)
	}
}

export default OptionComponent;