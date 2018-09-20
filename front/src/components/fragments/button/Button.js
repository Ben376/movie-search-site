import React, { Component } from 'react';

import styles from '../../../styles/Input.css';

export default class Button extends Component {
  static defaultProps = {
    type: 'text',
    title: 'none',
  };

  render() {
  const {
    type, 
    title
  } = this.props;

  return (
  <div>
    <button 
    style={{...styles.button}} 
    type={type}> 
      {title}
    </button>
  </div>
  )
  }
}
