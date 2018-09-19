import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../../actions'

class Add extends Component {
  constructor(props){
    super(props);
      this.state = {
      title : '', year : '',runtime : '',
      genre : 'Horror', director : '',actors:'', 
      plot: '', posterUrl: '', flash: '', errorMessage: ''
    };
}

  handleChange (e) {
    
    if (e.target.name === 'year' || e.target.name === 'runtime') {
          let numberInput = e.target.value;
          numberInput = numberInput.replace(/[^0-9]/g, "");
          e.target.value = numberInput;
    }

    if (e.target.name === 'year') {
        if (e.target.value.length && e.target.value.length < 4) {
          this.setState({ errorMessage: true });
        } else {
          this.setState({ errorMessage: false });      
        }
    }

    this.setState(
    {[e.target.name] : e.target.value});}


    handleKeyPress (e) {
      const value = e.target.value.split('');
          if ( value.length > 3 ) {
                e.preventDefault();
                e.stopPropagation();
          } else {
                return null
          }
    } 

  handleSubmit(event) {
      event.preventDefault()
      let form = JSON.stringify(this.state);
      this.props.actions.fetchingAddData('/sql/add', form)

      alert('It has been saved!');
    }

  render() {
    const styleTextField = {padding: '2px', display: 'block', margin: 'auto'};
    const styleSpace = {marginBottom: '20px'};

    return (
      <div>
        <h4> Add movies </h4>
        <p> { this.state.errorMessage ? <p style={{color: 'red'}} > Year: 1900 </p> : null }
        </p>
        <form style={{display: 'block'}} id='form' onSubmit={this.handleSubmit.bind(this)} >

            <input style={styleTextField} placeholder='title' type='text' name='title' onChange={this.handleChange.bind(this)} required/>
            <input style={styleTextField} placeholder='year' type='text' name='year' onKeyPress={this.handleKeyPress.bind(this)} onChange={this.handleChange.bind(this)} required/>
            <input style={styleTextField} placeholder='runtime' type='text' name='runtime' onChange={this.handleChange.bind(this)} required/>
            <label style={styleTextField} > Genre
            </label>
            <select style={styleSpace} type='text' name='genre' onChange={this.handleChange.bind(this)} required>
            <option value='Horror' > Horror </option>
            <option value='Fantasy' > Fantasy </option>
            <option value='Historical' > Historical </option>
            <option value='Drama' > Drama </option>
            <option value='Comedy' > Comedy </option>
            <option value='Thriller' > Thriller </option>
            <option value='Sci Fi' > Sci Fi </option>
            </select>
            <input style={styleTextField} placeholder='director' type='text' name='director' onChange={this.handleChange.bind(this)} required/>
            <input style={styleTextField} placeholder='actors' type='text' name='actors' onChange={this.handleChange.bind(this)} required/>
            <input style={styleTextField} placeholder='plot' type='text' name='plot' onChange={this.handleChange.bind(this)} required/>
            <input style={styleTextField} placeholder='type yout poster URL' type='text' name='posterUrl' onChange={this.handleChange.bind(this)} required/>
            <button style={{padding: '5px', margin:'10px', backgroundColor: '#58b0a1'}} type='submit'> Confirm </button>

        </form>
      </div>
    )
  }
}

const mapStateToProps = state =>({
  movieList: state.fetchReducer.data.row
});

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Add);
