import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions';

import Input from '../../components/fragments/input/Input';
import ErrorField from '../../components/fragments/error/ErrorField';
import Select from '../../components/fragments/select/Select';
import Button from '../../components/fragments/button/Button';

/* import {objectForm} from '../../utils/objectForm';
 */

import styles from '../../styles/Input.css';

class Add extends Component {
    state = {
    title : '', year : '',runtime : '',
    genre : 'Horror', director : '',actors:'', 
    plot: '', posterUrl: '', errorMessage: ''
  };

  handleChange = e => {

    this.props.actions.actionHandleChange(e)

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
  {[e.target.name] : e.target.value});
}

  handleKeyPress = e => {
    const value = e.target.value.split('');
      if ( value.length > 3 ) {
        e.preventDefault();
        e.stopPropagation();
      } else {
        return null
      }
  } 

  handleSubmit = () => {
    let form = JSON.stringify(this.props.form);  
         
    this.props.actions.actionDatabaseAdd(form)
    alert('It has been saved!');
  }

  render() {
    const {errorMessage} = this.state;

    const change = this.handleChange.bind(this);
    const key = this.handleKeyPress.bind(this);
    const submit = this.handleSubmit.bind(this);

    const formObject = [
      {placeholder: 'title', type: 'text', name: 'title', onChange: change},
      {placeholder: 'year', type: 'text', name: 'year', onChange: change, onKeyPress: key},
      {placeholder: 'runtime', type: 'text', name: 'runtime', onChange: change, onKeyPress: key},
      {placeholder: 'director', type: 'text', name: 'director', onChange: change},
      {placeholder: 'actors', type: 'text', name: 'actors', onChange: change},
      {placeholder: 'plot', type: 'text', name: 'plot', onChange: change},
      {placeholder: 'posterUrl', type: 'text', name: 'posterUrl', onChange: change},
    ];

    console.log(this.props.form);

    return (
      <div>
      <ErrorField 
        errorMessage={errorMessage} 
        title={'ADD MOVIES'} 
        selectOption={'Year: 1900'} />

      <form 
        style={{...styles.formBlock}} 
        id='form' 
        onSubmit={submit} >

        {formObject.map((input,i) =>    
          <Input 
            key={i} 
            {...formObject[i]} />
        )}

        <Select 
          label={'Genre'} 
          type={'text'} 
          name={'genre'}
          value={['Horror', 'Fantasy', 'Historical', 'Drama', 'Comedy', 'Thriller', 'Sci Fi']} 
          onChange={change}/>
    
        <Button 
          type={'submit'} 
          title={'Add'} />
      </form>
      </div>
    )
  }
}

const mapStateToProps = state =>({
  form: state.handleChange.form,
});

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Add);
