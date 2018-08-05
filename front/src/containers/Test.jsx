import React, { Component } from 'react';
import '../App.css';

import { connect } from 'react-redux'

class Test extends Component {
  render() {
    return (
      <div className="App">
        <h1>{this.props.newState}</h1>
        <button onClick={() => this.props.addValue(5)} > AJOUT </button>
        <button onClick={this.props.removeValue} > DELETE </button>
        <h1>{this.props.text}</h1>
      </div>
    );
  }
}

const mapStateToProps = state =>  {
  return {
    newState: state.value,
    newState2: state.text,
    }
}

const mapDispatchToProps = dispatch => {
  return {
    addValue: (x) => dispatch ({ type: 'ADD', value: x }),
    removeValue: () => dispatch ({ type: 'DELETE' })

  }
}

export default connect(mapStateToProps, mapDispatchToProps) (Test);