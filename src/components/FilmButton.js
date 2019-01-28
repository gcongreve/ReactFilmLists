import React, { Component} from 'react';

class FilmButton extends Component{

  render(){
    return (
      <a href={this.props.url}>
        <button>{this.props.text} </button>
      </a>

    );
  }

}

export default FilmButton;
