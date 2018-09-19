import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions';
import Loading from '../../components/Loading';

import styles from './Display.css';

class Display extends Component {

  static defaultProps = {
    list: [],
  }

  componentDidMount () {    
    this.props.actions.actionDisplayRandomList();
  }

  render() {
    const {list} = this.props;

  if(list.length !== 0) {
    return (
      <div>
        <h2> Last movies </h2>
        <hr />
    
        {list.map(movie => 
        <div key={movie.title} style={{...styles.wrapper}} >
          <div >
            <img alt={movie.title} src={movie.posterUrl} style={{...styles.poster}} />
          </div>
          <div >
            <p><b>{movie.title}</b></p>
            <p>{movie.director}</p>
            <p>{movie.year}</p>
          </div>
        </div>
        )}
      </div>
      );
  } else {
    return <Loading />;
  }
    }
  }

const mapStateToProps = state =>({
  list: state.fetchDisplayList.list.row,
});

const mapDispatchToProps = dispatch => {
  return {
  actions: bindActionCreators(actions, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Display);
