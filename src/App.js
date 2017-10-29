/*global gapi*/
import React, {Component} from 'react';
/*
import gapi from 'gapi';

Jordane-note:
Using the NPM module version google api didn't work

To make it work you to create an webpack custom loader for webpack
That is beyond my skill level.
*/
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clientId: "61648028215-2fecetp5g102kdbjuessfvfi2fpetlhk.apps.googleusercontent.com",
      discoveryDocs: ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"],
      scopes: "https://www.googleapis.com/auth/calendar"
    };
  }

  componentWillMount() {
    gapi.load('client:auth2', this.hello);
  }

  hello() {
    window.alert("Hi");
  }

  render() {
    return (
      <div className="App">
        <p>Google Calendar API Quickstart</p>

        <button id="authorize-button" style={{display: "none"}}>Authorize</button>
        <button id="signout-button" style={{display: "none"}}>Sign Out</button>
        <form className="mkEvnt">
          <input type="text" id="txtBx" placeholder="Enter Event Name" />
          <input type="button" value="submit" />
        </form>

        <pre id="content"></pre>

      </div>
    );
  }
}

export default App;
