import React, { Component } from 'react';

import styles from '../../../styles/Input.css';

export default class Input extends Component {

  static defaultProps = {
    placeholder: 'none',
    type: 'none',
    name: 'none',
    onChange: () => {},
  };

  render() {
    const {placeholder, type, name, onChange, onKeyPress} = this.props;
    return (
    <div>
      <input 
      style={{...styles.wrapper}} 
      placeholder={placeholder} 
      type={type} 
      name={name}
      onChange={onChange}
      onKeyPress={onKeyPress}
      required/>
    </div>
    )
  }
}
