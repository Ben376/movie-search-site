import React, {Component} from 'react';

import {Route, Switch, NavLink, Redirect, withRouter} from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import './App.css';

import Display from './containers/display/Display';
import Search from './containers/search/Search';
import Add from './containers/add/Add';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from './actions';

class App extends Component {

  componentWillMount() {
    this.props.actions.actionFirstSaga();
  }

  render() {
    return (
      <div className="App">
      <div>
        <ul className="header">
            <li><NavLink exact to="/" > Home </NavLink></li>
            <li><NavLink to="/Display" activeStyle={{fontWeight: 'bold', color: 'red'}}> Last movies </NavLink></li>
            <li><NavLink to="/Search" activeStyle={{fontWeight: 'bold', color: 'red'}}> Research </NavLink></li>
            <li><NavLink to="/Add" activeStyle={{fontWeight: 'bold', color: 'red'}}> Add movies </NavLink></li>
        </ul>

        <div>
        <MuiThemeProvider>
            <Switch>
              <Redirect exact from='/' to='/Display'/>
              <Route exact path="/Display" component={Display} />
              <Route path="/Search" component={Search} />
              <Route path="/Add" component={Add} />
            </Switch>
        </MuiThemeProvider>
        </div>
      </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
  actions: bindActionCreators(actions, dispatch),
  };
};

export default withRouter(connect(null, mapDispatchToProps)(App));

