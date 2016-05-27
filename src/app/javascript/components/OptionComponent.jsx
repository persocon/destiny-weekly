import React, { PropTypes } from 'react';

function OptionComponent(props) {
  return (
    <option value={props.value} disabled={props.disabled}>{props.title}</option>
	);
}

OptionComponent.propTypes = {
  value: PropTypes.string,
  title: PropTypes.string,
  disabled: PropTypes.any,
};

export default OptionComponent;
