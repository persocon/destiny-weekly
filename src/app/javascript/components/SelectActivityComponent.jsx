import React, { PropTypes } from 'react';
import OptionComponent from './OptionComponent';

class SelectActivityComponent extends React.Component {
  componentDidMount() {
    this.props.getInitialOptions();
  }

  showOptions() {
    const options = this.props.options.map((option, index) => {
      const title = option.advisorTypeCategory;
      const value = option.identifier;
      const disabled = option.disabled;
      return (
        <OptionComponent
          key={index}
          title={title}
          value={value}
          disabled={disabled}
        />
      );
    });

    return options;
  }

  render() {
    return (
      <div className="selectActivityComponent">
        <div className="selectWrap">
          <select onChange={event => this.props.onSelectChange(event.target.value)}>
            {this.showOptions()}
          </select>
        </div>
      </div>
		);
  }
}

SelectActivityComponent.propTypes = {
  onSelectChange: PropTypes.func.isRequired,
  getInitialOptions: PropTypes.func.isRequired,
  options: PropTypes.array,
};

export default SelectActivityComponent;
