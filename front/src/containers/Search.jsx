import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../actions'

class Search extends Component {
    constructor(props){
        super(props);
            this.state={
              genreValue: '',
              yearValue: '',
              searchDirectorValue: '',
              searchValue: '',
              stored: [],
          }
    }

componentWillMount () {

  this.props.actions.fetchingDisplayData('/sql/list')

  let memoryCardCopy = this.state.stored;
  for (let i = 0; i < localStorage.length; i++) {

          let itemStored = { 
              id: localStorage.key(i), 
              title: localStorage.getItem(localStorage.key(i)) 
  };

          memoryCardCopy.push(itemStored);
  }

  this.setState({
      stored: memoryCardCopy,
})

}

handleDelete= id => {
  let form = JSON.stringify(this.state);

  if (window.confirm('Are you really sure you want to delete the movie?')) {
      this.props.actions.fetchingDeleteData(`/sql/delete/${id}`, form)

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

handleStored (x) {
  const onLocalStorage = localStorage.getItem(x.ID);
  let newMemory;

  if (!onLocalStorage) {
      localStorage.setItem(x.ID, x.title);
      newMemory = this.state.stored.concat({
          id: x.ID, 
          title: x.title});
  }
      this.setState({
        stored: newMemory,

      }) 
      
}

handleDeletedStore (x) {
  let updatedMemory;
  const inLocalStorage = localStorage.getItem(x);

  if (window.confirm('No more your favorite ?') && inLocalStorage) {
      localStorage.removeItem(x);
      updatedMemory = this.state.stored.filter(deleted => 
          deleted.id !== x);
  } else {
      updatedMemory = this.state.memory;
  }

  this.setState({
    stored: updatedMemory,

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
              {this.state.stored !== undefined && this.state.stored.length ?
              this.state.stored.map(saved => 
              <div style={{display:'inline-block', margin :'10px', padding: '5px'}}>
              <p> {saved.title} </p>
              <button onClick={() => this.handleDeletedStore(saved.id)}> remove </button> 
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
                <img src={x.posterUrl} alt='poster-movie' />
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
                onClick={() => this.handleStored(x)} > Favorite 
                </button>
            </div>
        )}

        </div>
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


export default connect(mapStateToProps, mapDispatchToProps)(Search);
