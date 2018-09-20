import React, { Component } from 'react';
import styles from '../../../styles/Input.css';

export default class ErrorField extends Component {
  render() {
    const {errorMessage, title, selectOption} = this.props;
  return (
    <div>
    <h4> 
      {title} 
    </h4>
    <div> 
      {errorMessage ? 
      <p style={{...styles.activeClass}} > 
        {selectOption}
      </p> : 
      null 
      }
    </div>
    </div>
  )
  }
}
