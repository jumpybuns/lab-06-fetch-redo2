import React, { Component } from 'react'
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import ShielaPage from './ShielaPage.js';


export default class App extends Component {
  render() {
    return (
      <div className="App">
          <Router>
          <Switch>
            <Route
            path="/"
            exact render={(routerProps) => <ShielaPage {...routerProps} />}
            />
          </Switch>
        </Router>
      </div>
    )
  }
}
