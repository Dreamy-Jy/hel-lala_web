import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

class ProfilePage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (<main>
      <p>Profile Page</p>
      <Link to="/">
        <button>Log out</button>
      </Link>
    </main>);
}
}

export default ProfilePage;
