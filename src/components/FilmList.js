import React, { Component } from 'react';
import Film from './Film.js';

class FilmList extends Component {


  render(){
    const films = this.props.filmReleases.map((film) => {
      return <Film key={film.id} name={film.name} url={film.url} />
    });

    return(
      <>
        { films }
      </>
    );
  }

}

export default FilmList;
