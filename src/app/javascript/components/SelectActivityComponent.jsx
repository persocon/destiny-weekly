import React, { PropTypes } from 'react';
import OptionComponent from './OptionComponent';

class SelectActivityComponent extends React.Component {
  componentDidMount() {
    this.props.getOptionsRequest();
  }
  onSelectChange(activity) {
    this.props.changeApiUrl(activity);
    this.props.setActivityRequest();
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
            onChange={event => this.onSelectChange(event.target.value)}
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
  changeApiUrl: PropTypes.func.isRequired,
  setActivityRequest: PropTypes.func.isRequired,
  getOptionsRequest: PropTypes.func.isRequired,
  options: PropTypes.array,
  activity: PropTypes.string,
};

export default SelectActivityComponent;
