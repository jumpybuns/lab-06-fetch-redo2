import React, { Component } from 'react'
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import { Link } from 'react-router-dom';
import ShielaPage from './ShielaPage.js';
import CreatePage from './CreatePage.js';


export default class App extends Component {
  render() {
    return (
      <div className="App">
     
          <Router>
                <ul >
                    <Link className="create" to="/create">Add A Song</Link>
                </ul>
          <Switch>
            <Route
            path="/"
            exact render={(routerProps) => <ShielaPage {...routerProps} />}
            />
            <Route
            path="/create"
            exact render={(routerProps) => <CreatePage {...routerProps} />}
          />
          </Switch>
        </Router>
      </div>
    )
  }
}
