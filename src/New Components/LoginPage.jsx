import React, {Component} from 'react';
import {Route, Link, Switch} from 'react-router-dom';
import AuthForm from "./AuthForm";

class LoginPage extends Component {
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
      <main>
        <h1>Welcome Login or Sign-Up</h1>
        <Link to="/login">
          <button>Login</button>
        </Link>
        <Link to="/signup">
          <button>Sign Up</button>
        </Link>

        <Route exact to="/signup" component={RegisterForm} />
        <Route exact to="/login" component={LoginForm} />
      </main>);
  }
}

export default LoginPage;
