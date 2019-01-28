import React, { Component } from 'react';

class Film extends Component{

  render(){
    return (
      <>
        <a href={this.props.url}>
        <li>Film: {this.props.name} </li>
        </a>
      </>
    )
  }


}

export default Film;
