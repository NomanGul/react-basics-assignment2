// 1) Using states, render a text "Hello World", on clicking it, it should toggle to "Hello Pakistan", and vice versa! 
// 2) Write the difference between onClick={this.myFunc()}, onClick={() => this.myFunc()} & onClick={this.myFunc.bind(this}}


import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// NAVBAR COMPONENT
class Navbar extends Component {
  render() {
    return (
        <div className="navbar-fixed">
          <nav>
            <div className="nav-wrapper grey darken-3 z-depth-4">
              <a className="brand-logo center"><img src={logo} className="App-logo center-align" alt="logo" /></a>
            </div>
          </nav>
        </div>
    )
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />

        <div className = "container">

        </div>
      </div>
    );
  }
}

export default App;
