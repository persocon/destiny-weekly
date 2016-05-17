import React, { PropTypes } from 'react';
import ReactCSSTransitionGroup from 'react/lib/ReactCSSTransitionGroup';
import CharacterListItemComponent from './CharacterListItemComponent';



class CharactersComponent extends React.Component {
  componentWillMount(){
    this.props.onInit();
  }
  list() {
    if(this.props.character_list.length <= 0){
      //CREATE LOADING VIEW!!!
      return (
        <div className="charactersList">LOADING</div>
      )
    }else if(this.props.character_list.status == "error"){
      //CREATE VIEW FOR WHEN THERE'S NO USER;
      return (<div><a href="#" onClick={event => this.props.backToLogin(event)}>DEU RUIM</a></div>);
    }else{
      let character_list = this.props.character_list.map((character, index) => {
  			return (
          <CharacterListItemComponent character={character} handleClick={event => this.props.handleClickItem(event)} key={index} />
        );
  		});

  		return(<ul className="characterComponent top-bar">{character_list}</ul>);
    }
  }
  render() {
    return(
          <ReactCSSTransitionGroup
            transitionName={"fade"}
            transitionAppear={true}
            transitionAppearTimeout={500}
            transitionEnterTimeout={500}
            transitionLeaveTimeout={300}>
            {this.list()}
          </ReactCSSTransitionGroup>
    )
  }
}

CharactersComponent.propTypes = {
	onInit: PropTypes.func.isRequired,
  backToLogin: PropTypes.func.isRequired,
  handleClickItem: PropTypes.func.isRequired
}

export default CharactersComponent;
