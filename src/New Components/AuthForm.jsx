import React, {Component} from 'react';
import {Link} from "react-router-dom";
import firebase from "firebase";

/* This will hold the Google OAuth stuff for me
<form>
  <input type="text" placeholder="Email"/>
  <input type="password" placeholder="Password" />
  <button>{this.props.buttonText}</button>
</form> */

class AuthForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
    this.handleEmail = this.handleEmail.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
  }

  handleEmail(event) {
    this.setState({email: event.target.value});
  }

  handlePassword(event) {
    this.setState({password: event.target.value});
  }

  render() {
    return (<main>
      <h1>{this.props.buttonText}</h1>
      <form>
        <input type="text" onChange={this.handleEmail} value={this.state.email} placeholder="Email"/>
        <input type="password" onChange={this.handlePassword} value={this.state.password} placeholder="Password"/>
        <button>{this.props.buttonText}</button>
        <Link to="">
          <button>back</button>
        </Link>
      </form>
    </main>);
  }
}

export default AuthForm;
