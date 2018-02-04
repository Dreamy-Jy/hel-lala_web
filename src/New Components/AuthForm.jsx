import React,{Component} from 'react';
import {Link} from "react-router-dom";

/*
This will hold the Google OAuth stuff for me

<form>
  <input type="text" placeholder="Email"/>
  <input type="password" placeholder="Password" />
  <button>{this.props.buttonText}</button>
</form>
*/

class AuthForm extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <form>
        <input type="text" placeholder="Email"/>
        <input type="password" placeholder="Password" />
        <button>{this.props.buttonText}</button>
      </form>
    );
  }
}

export default AuthForm;
