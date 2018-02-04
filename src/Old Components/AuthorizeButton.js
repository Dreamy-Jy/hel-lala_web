/*global gapi*/
import React, {Component} from 'react';

class AuthorizeButton extends Component {
  constructor(props) {
    super(props);

    this.handleAuthClick = this.handleAuthClick.bind(this);
  }

  handleAuthClick(event) {
    gapi.auth2.getAuthInstance().signIn();
    console.log("AuthorizeButton: Authorized");
  }

  render() {
    return(
      <button id="authorize-button" onClick={this.handleAuthClick}>
        Authorize
      </button>
    );
  }
}

export default AuthorizeButton;
