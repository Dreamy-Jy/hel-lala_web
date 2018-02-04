import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

class LoginPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <main>
        <h1>Hel'lala: Welcome are you new here?</h1>
        <p>Hel'lala: Introduce yourself </p>
        <Link to="/profile">
          <button>Hi Hel'lala</button>
        </Link>
      </main>);
  }
}

export default LoginPage;
