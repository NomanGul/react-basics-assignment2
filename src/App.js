// 1) Using states, render a text "Hello World", on clicking it, it should toggle to "Hello Pakistan", and vice versa! 
// 2) Write the difference between onClick={this.myFunc()}, onClick={() => this.myFunc()} & onClick={this.myFunc.bind(this}}


import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
