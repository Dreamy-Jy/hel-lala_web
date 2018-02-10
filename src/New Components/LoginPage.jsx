import React, {Component} from 'react';
import {Route, Link, Switch} from 'react-router-dom';

class LoginPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <main>
        <h1>Welcome Login or Sign-Up</h1>
        <Link to="/login">
          <button>Login</button>
        </Link>
        <Link to="/signup">
          <button>Sign Up</button>
        </Link>
      </main>);
  }
}

export default LoginPage;
