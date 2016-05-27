import React, { PropTypes } from 'react';
import ReactCSSTransitionGroup from 'react/lib/ReactCSSTransitionGroup';

class CharacterMiniListItemComponent extends React.Component {
  backgroundImage() {
    const divStyle = {
      backgroundImage: `url(http://bungie.net${this.props.character.backgroundPath})`,
    };
    return divStyle;
  }
  emblemImage() {
    const divStyle = {
      backgroundImage: `url(http://bungie.net${this.props.character.emblemPath})`,
    };
    return divStyle;
  }
  selected() {
    const selected = (this.props.selected) ? 'characterMiniListItemSelected' : '';
    if (selected) {
      return `characterMiniListItem ${selected}`;
    }
    return 'characterMiniListItem';
  }
  render() {
    return (
      <ReactCSSTransitionGroup
        transitionName={"fade"}
        transitionAppear
        transitionAppearTimeout={500}
        transitionEnterTimeout={500}
        transitionLeaveTimeout={300}
      >
        <li className={this.selected()} style={this.backgroundImage()}>
          <a
            href={this.props.character.character_id}
            onClick={event => this.props.handleClick(event)}
          >
            <div style={this.emblemImage()} className="characterListItemEmblem"></div>
          </a>
        </li>
      </ReactCSSTransitionGroup>
		);
  }
}

CharacterMiniListItemComponent.propTypes = {
  handleClick: PropTypes.func.isRequired,
  character: PropTypes.object.isRequired,
  selected: PropTypes.bool,
};

export default CharacterMiniListItemComponent;
