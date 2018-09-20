import React, { Component } from 'react';

import styles from '../../../styles/Input.css';

export default class Select extends Component {

  static defaultProps = {
    label: 'none',
    type: 'text',
    name: 'none',
    value: ['none'],
    text: 'none',
    onChange: () => {},
  };

  render() {
    const {
        label, 
        type, 
        name, 
        onChange, 
        value, 
    } = this.props;
    
    return (
        <div>
            <label > 
                {label}
            </label>
            <select 
                style={{...styles.wrapper}} 
                type={type} 
                name={name}
                onChange={onChange} 
                required>

            {value.map((vl,i) => 
              <option 
                key={i} 
                value={vl} > 
                {vl} 
              </option>
            )}

        </select>
        </div>
    )
  }
}
