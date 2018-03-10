import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
        constructor(props) {
          super(props);
          this.state = {value: ''};


          this.newHandle = this.newHandle.bind(this);
          this.newSubmit = this.newSubmit.bind(this);
        }

        newHandle(event) {
          this.setState({value: event.target.value});

        }

        newSubmit(event) {
          alert('Your name is:' + this.state.value);

        }


      render() {
        return (
            <form onSubmit={this.newSubmit}>
              <label>
                Enter your name:
                  <input type='text' onChange={this.newHandle}
                     value={this.state.value}
                     />
              </label>
              <input type='submit' value='Enter' />


          </form>
        );
      }
}

export default App;
