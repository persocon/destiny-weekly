import React, { PropTypes } from 'react';

import BigPictureComponent from './BigPictureComponent';
import ModifierComponent from './ModifierComponent';
import ObjectivesComponent from './ObjectivesComponent';
import LoadingComponent from './LoadingComponent';

class ActivityComponent extends React.Component {
  componentDidMount() {
    this.props.getInitialActivity();
  }
  backgroundImage() {
    let divStyle;
    switch (this.props.activity.identifier) {
      case 'xur': {
        divStyle = {
          backgroundImage: 'url(http://bungie.net/img/theme/bungienet/bgs/bg_xuravailable.jpg)',
          backgroundPosition: '25% 0',
        };
        break;
      }
      case 'ironbanner': {
        divStyle = {
          backgroundImage: 'url(https://www.bungie.net/img/theme/destiny/bgs/event/ironbanner/bg_iron_banner_section_powermatters.jpg)',
          backgroundPosition: 'right center',
        };
        break;
      }
      default: {
        divStyle = {
          backgroundImage: `url(${this.props.activity.backgroundImg})`,
        };
        break;
      }
    }

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
        backgroundImage: `url(http://bungie.net${boss.image})`,
      };
      return (
        <BigPictureComponent
          key={index}
          style={style}
          title={boss.combatantName}
          subtitle={boss.description}
          description=""
        />
        );
    });

    return bosses;
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

      {this.showModifiers()}

      {this.showRewards()}

      {this.showXur()}

      {this.showObjectives()}

      {this.showProgression()}

      {this.showBounties()}

      {this.showBosses()}

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
  getInitialActivity: PropTypes.func.isRequired,
  activity: PropTypes.object.isRequired,
};

export default ActivityComponent;
