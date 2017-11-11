/*global gapi*/
import React, {Component} from 'react';
import AuthorizeButton from './Components/AuthorizeButton';
import SignOutButton from './Components/SignOutButton';
/* import gapi from 'gapi';

Jordane-note:
Using the NPM module version google api didn't work

To make it work you to create an webpack custom loader for webpack
That is beyond my skill level. */
import './App.css';

  class App extends Component {
    constructor(props) {
      super(props);
      this.state = {
        clientId: "61648028215-2fecetp5g102kdbjuessfvfi2fpetlhk.apps.googleusercontent.com",
        discoveryDocs: ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"],
        scopes: "https://www.googleapis.com/auth/calendar",
        authorizeButton: document.getElementById('authorize-button'),
        signoutButton: document.getElementById('signout-button')
      };

    }

    componentWillMount() {
      gapi.load('client:auth2', this.initClient);
    }

    componentDidMount() {

    }

    /*
    in this callback this does not refer to the component
    */
    initClient() {
      gapi.client.init({
        discoveryDocs: ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"],
        clientId: "61648028215-2fecetp5g102kdbjuessfvfi2fpetlhk.apps.googleusercontent.com",
        scope: "https://www.googleapis.com/auth/calendar"})
      // }).then(function() {
      //   // Listen for sign-in state changes.
      //   gapi.auth2.getAuthInstance().isSignedIn.listen(updateSigninStatus);
      //
      //   // Handle the initial sign-in state.
      //   updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
      //   authorizeButton.onclick = handleAuthClick;
      //   signoutButton.onclick = handleSignoutClick;
      // });
    }

    /**
     *  Sign in the user upon button click.
     */

    /**
     *  Sign out the user upon button click.
     */
    handleSignoutClick(event) {
      gapi.auth2.getAuthInstance().signOut();
    }

    updateSigninStatus(isSignedIn) {
      if (isSignedIn) {
        this.state.authorizeButton.style.display = 'none';
        this.state.signoutButton.style.display = 'block';
      } else {
        this.state.authorizeButton.style.display = 'block';
        this.state.signoutButton.style.display = 'none';
      }
    }


    render() {
      return (<div className="App">
        <p>Google Calendar API Quickstart</p>

        <AuthorizeButton />
        <SignOutButton />
        <form className="mkEvnt">
          <input type="text" id="txtBx" placeholder="Enter Event Name"/>
          <input type="button" value="submit"/>
        </form>

        <pre id="content"></pre>

      </div>);
    }
  }

export default App;
