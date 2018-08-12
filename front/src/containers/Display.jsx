import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../actions'


class Display extends Component {

  componentWillMount () {
      this.props.actions.fetchingDisplayData('/sql/random')
  }

  render() {

    return (

    <div>
      <h2> Last movies </h2>

      <hr />

      {this.props.movieList && this.props.movieList.map(movie => 
      
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
      
      ) }

    </div>
    )
  }
}

const mapStateToProps = state =>({
  movieList: state.data.row
});

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Display);
