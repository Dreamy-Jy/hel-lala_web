import React, {Component} from 'react';
import {Route, Link, Switch} from 'react-router-dom';
import LoginPage from "./New Components/LoginPage";
import ProfilePage from "./New Components/ProfilePage";
import './App.css';

// NOTE: I don't fully understand the in functioning of the switch component

  class App extends Component {
    constructor(props) {
      super(props);
    }

    render() {
      return (
      <div className="App">
        <Switch>
          <Route path="/" component={LoginPage} />
          <Route path="/profile" component={ProfilePage} />
        </Switch>
      </div>);
    }
  }

export default App;
