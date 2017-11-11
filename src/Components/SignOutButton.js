/*global gapi*/
import React, {Component} from 'react';

class SignOutButton extends Component {
  constructor(props) {
    super(props);

    this.handleSignoutClick = this.handleSignoutClick.bind(this);
  }

  handleSignoutClick(event) {
    gapi.auth2.getAuthInstance().signOut();
    console.log("SignOutButton: sign out");
  }

  render() {
    return(
      <button id="signout-button" onClick={this.handleSignoutClick}>
        Sign Out
      </button>
    );
  }
}

export default SignOutButton;
