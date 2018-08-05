import React, { Component } from 'react'

export default class Display extends Component {
  constructor(props){
    super(props);
      this.state={
        movieList: [],
      }
  }

  componentWillMount () {
    fetch('/sql/random')
    .then(res => res.json())
    .then(res => {     
      this.setState({
        movieList: res.row,
      });
  });
  
  }

  render() {

    return (

    <div>
      <h2> Last movies </h2>

      <hr />

      {this.state.movieList.map(movie => 
      
      <div key={movie.title} style={{border: '1px solid black', padding: '15px', margin: '5px', display: 'inline-block'}} >
              <div >
                      <img alt={movie.title} src={movie.posterUrl} />
              </div>
                      
              <div >
                      <p><b>{movie.title}</b></p>
                      <p>{movie.director}</p>
                      <p>{movie.year}</p>
              </div>
      </div>
      
      )}

    </div>
    )
  }
}
