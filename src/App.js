import React, {Component} from 'react';
import {Route, Link, Switch} from 'react-router-dom';
import LoginPage from "./New Components/LoginPage";
import ProfilePage from "./New Components/ProfilePage";
import AuthForm from "./New Components/AuthForm";
import './App.css';

// NOTE: I don't fully understand the in functioning of the switch component

  class App extends Component {
    constructor(props) {
      super(props);
    }

    render() {
      const LoginForm = () => {
        return (<AuthForm buttonText="Login"/>);
      };

      const RegisterForm = () => {
        return (<AuthForm buttonText="Sign Up" />);
      };
      return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={LoginPage} />
          <Route exact path="/signup" component={RegisterForm}/>
          <Route exact path="/login" component={LoginForm}/>
          <Route path="/profile" component={ProfilePage} />
        </Switch>
      </div>);
    }
  }

export default App;
