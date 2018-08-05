import React, { Component } from 'react';
import './App.css';
import { Route, Switch, NavLink, Redirect} from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Loading from './components/Loading'
import Display from './components/Display'
import Search from './components/Search'
import Add from './components/Add'

class App extends Component {
  constructor(props){
    super(props);
      this.state={
        loading: false,
      }
  }

  componentDidMount () {
    setTimeout(() => {
      this.setState({
        loading: true
      })
    }, 1000);
  }

  render() {
    return (
      <div className="App">
      {!this.state.loading ?

      <Loading /> :
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

      }
      </div>
    );
  }
}

export default App;
