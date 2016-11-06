import React, { PropTypes } from 'react';

import BigPictureComponent from './BigPictureComponent';
import ModifierComponent from './ModifierComponent';
import ObjectivesComponent from './ObjectivesComponent';
import RaidComponent from './RaidComponent';
import LoadingComponent from './LoadingComponent';

class ActivityComponent extends React.Component {
  componentDidMount() {
    this.props.onInit();
  }
  backgroundImage() {
    const divStyle = {
      backgroundImage: `url(${this.props.activity.backgroundImg})`,
    };
    return divStyle;
  }

  showModifiers() {
    if (this.props.activity.modifiers.length >= 1) {
      const modifiers = this.props.activity.modifiers.map((modifier, index) => {
        const title = modifier.title;
        const skulls = modifier.skulls;
        return (<ModifierComponent key={index} title={title} details={skulls} />);
      });
      return modifiers;
    }
    return false;
  }

  showXur() {
    if (this.props.activity.items.length >= 1) {
      const xurItems = this.props.activity.items.map((item, index) => {
        const title = item.title;
        const items = item.items;
        return (<ModifierComponent key={index} title={title} details={items} />);
      });
      return xurItems;
    }
    return false;
  }

  showBounties() {
    if (this.props.activity.bounties.length >= 1) {
      return <ModifierComponent title="Contratos" details={this.props.activity.bounties} />;
    }
    return false;
  }

  showRewards() {
    if (this.props.activity.rewards.length >= 1) {
      return <ModifierComponent title="Recompensas" details={this.props.activity.rewards} />;
    }
    return false;
  }

  showObjectives() {
    if (this.props.activity.objectives.length >= 1) {
      return <ObjectivesComponent progression={this.props.activity.objectives} />;
    }
    return false;
  }

  showProgression() {
    if (this.props.activity.progress.length >= 1) {
      return <ObjectivesComponent progression={this.props.activity.progress} />;
    }
    return false;
  }

  showBosses() {
    const bosses = this.props.activity.bosses.map((boss, index) => {
      let style = {
        backgroundImage: `url(${boss.image})`,
      };
      return (
        <BigPictureComponent
          key={index}
          style={style}
          title={boss.title}
          subtitle={boss.description}
          description=""
        />
        );
    });

    return bosses;
  }
  showRaid() {
    if (this.props.activity.raid.length >= 1) {
      const raidComponent = this.props.activity.raid.map((raid, index) => {
        return <RaidComponent {...raid} key={index} />;
      });
      return raidComponent;
    }
    return false;
  }
  activity() {
    return (
      <div className="boxContent">
        <BigPictureComponent
          style={this.backgroundImage()}
          completed={this.props.activity.completed}
          title={this.props.activity.title}
          subtitle={this.props.activity.name}
          description={this.props.activity.desc}
          icon={this.props.activity.icon}
        />

      {this.showRaid()}

      {this.showProgression()}

      {this.showObjectives()}

      {this.showModifiers()}

      {this.showBounties()}

      {this.showRewards()}

      {this.showBosses()}

      {this.showXur()}

      </div>
    );
  }


  render() {
    if (this.props.activity.title === 'loading') {
      return (<LoadingComponent />);
    }
    return (<div className="activityComponent box">{this.activity()}</div>);
  }
}

ActivityComponent.propTypes = {
  onInit: PropTypes.func.isRequired,
  activity: PropTypes.object.isRequired,
};

export default ActivityComponent;
