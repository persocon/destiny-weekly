import React, { PropTypes } from 'react';
import OptionComponent from './OptionComponent';

class SelectActivityComponent extends React.Component {
  componentDidMount() {
    this.props.getInitialOptions();
  }
  showOptions() {
    const opts = this.props.options.map((option, index) => {
      const title = option.title;
      return (
        <optgroup label={title} key={index}>
          {this.mapOptions(option.activities)}
        </optgroup>
      );
    });
    return opts;
  }
  mapOptions(activities) {
    const options = activities.map((option, index) => {
      const title = option.title;
      const value = option.value;
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
          <select
            onChange={event => this.props.onSelectChange(event.target.value)}
            defaultValue={this.props.activity}
          >
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
  activity: PropTypes.string,
};

export default SelectActivityComponent;
