import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions';

class Search extends Component {
            state={
              genreValue: '',
              yearValue: '',
              searchDirectorValue: '',
              searchValue: '',
          }

  componentWillMount () {
    this.props.actions.actionDisplayAllList();
  }

  handleDelete = id => {
    if (window.confirm('Are you really sure you want to delete the movie?')) {
        this.props.actions.actionDatabaseRemove(id)
    }
  }

  handleDeletedStore = x => {
    if (window.confirm('No more your favorite ?')) {
      this.props.actions.actionPersistRemove(x);
    } 
  }

changeValue (event) {
  this.setState({
    searchValue: event
  })
}

changeValue2 (event) {
  this.setState({
    searchDirectorValue: event
  })
}

handleChange (event) {
  this.setState(
  {[event.target.name] : event.target.value});

  this.setState({
    genreValue: event.target.value,
  })
}

handleChange2 (event) {
  this.setState(
  {[event.target.name] : event.target.value});

  this.setState({
    yearValue: event.target.value,
  })
}

  render() {

    let filteredList = this.props.movieList && this.props.movieList.filter(matched => {
        return matched.title.toLowerCase()
                  .indexOf(this.state.searchValue
                  .toLowerCase()) !== -1 &&

        matched.director.toLowerCase()
            .indexOf(this.state.searchDirectorValue
            .toLowerCase()) !== -1 &&

        matched.genre.toLowerCase()
            .indexOf(this.state.genreValue
            .toLowerCase()) !== -1;
      }
      )
        .sort((a,b) => 
            this.state.yearValue === 'DESC' ?
            b.year - a.year : 
            this.state.yearValue === 'ASC' ?
            a.year - b.year :
            null
    );
    
    return (
      
      <div>
        <h2> Research </h2>
        <hr />

        <div style={{display:'block', margin :'10px', padding: '5px'}}> 
              <label > 
                <b> My Favorites </b>
              </label>

              <div> 
              {this.props.persistList !== undefined && this.props.persistList.length ?
              this.props.persistList.map((saved,i) => 
              <div key={`${i}${saved.title}`} style={{display:'inline-block', margin :'10px', padding: '5px'}}>
              <p> {saved.title} </p>
              <button onClick={() => this.handleDeletedStore(saved.ID)}> remove </button> 
              </div>
              )
              : 
              <p> None </p>}
              
              </div>
        </div>

        <div style={{display:'inline-block'}}>
            <label style={{display:'block', margin :'10px', padding: '5px'}} > 
              <b> Search Menu </b>
            </label>

            <label style={{display:'block', margin :'10px', padding: '5px'}} > 
              Search by movie's name 
            </label>
            <input type='search' placeholder='movie'
            onChange={event => this.changeValue(event.target.value)}
            />

            <label style={{display:'block', margin :'10px', padding: '5px'}} > 
              Filter by genre 
            </label>
            <select name='select' onChange={this.handleChange.bind(this)}>
                <option value='' > Aucun </option>
                <option value='Horror' > Horror </option>
                <option value='Fantasy' > Fantasy </option>
                <option value='Drama' > Drama </option>
                <option value='Historical' > Historical </option>
                <option value='Comedy' > Comedy </option>
                <option value='Thriller' > Thriller </option>
                <option value='Sci Fi' > Sci Fi </option>
            </select >
            
            <label  style={{display:'block', margin :'10px', padding: '5px'}} > 
              Sort by year 
            </label>
            <select name='selectYear' onChange={this.handleChange2.bind(this)}>
                <option value='' > Aucun </option>
                <option value='ASC' > Older </option>
                <option value='DESC' > Recent </option>
            </select >

            <label style={{display:'block', margin :'10px', padding: '5px'}}> 
              Search by director's name 
            </label>
            <input 
            type='search' placeholder='director'
            onChange={event => this.changeValue2(event.target.value)}
            />
        </div>  
        <hr />
        <h2> List of movies </h2>
        <div >

        {filteredList && filteredList.map(x => 
              
            <div key={x.ID} style={{border: '1px solid black', padding: '15px', margin: '5px', width: '400px', heigth: 'auto', display:'inline-block'}}>
                <h3>{x.title}</h3>
                <img src={x.posterUrl} style={{width: '300px',height: '441px'}} alt='poster-movie' />
                <p> Released: {x.year}</p>
                <p> Time: {x.runtime}</p>
                <p> Genre: {x.genre}</p>
                <p> Director: {x.director}</p>
                <p> Actors: {x.actors}</p>
                <p> Synopsis: {x.plot}</p>
                <form>
                <button onClick={() => this.handleDelete(x.ID)} > Delete </button>
                </form> 
                <button id='buttonAdd' key={x.ID}
                onClick={() => this.props.actions.actionPersistMovie(x)} > Favorite 
                </button>
            </div>
        )}

        </div>
 </div>
    )
  }
}

const mapStateToProps = state =>({
  movieList: state.fetchDisplayAll.allList.row,
  persistList: state.persistFavorites.persistList,
});

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(actions, dispatch),
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Search);
