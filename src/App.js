import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import myImg from './subHeaderPhoto.jpg';

// NAVBAR COMPONENT
class Navbar extends Component {
  render() {
    return (
        <div className="navbar-fixed">
          <nav>
            <div className="nav-wrapper grey darken-3 z-depth-4">
              <a className="brand-logo center">
                <img src={logo} className="App-logo center-align" alt="logo" />
              </a>
            </div>
          </nav>
        </div>
    )
  }
}

// AUTHOR INTRODUCTION COMPONENT
class AuthorIntro extends Component {
  render() {
    return (
      <div>
        <a href="https://www.linkedin.com/in/nomangul2001/" target="_blank" rel="noopener noreferrer">
          <div className="col s12 m8 offset-m2 l6 offset-l3 author-card">
            <div className="card-panel blue darken-1 hoverable">
              <div className="row valign-wrapper">
                <div className="col s2">
                  <img src={myImg} alt="Author" className="circle responsive-img" />
                </div>
                <div className="col s10">
                  <span className="white-text">This React project is developed by Noman Gul. 
                  I hope you like this, So dont forget to give your feedback!</span>
                </div>
              </div>
            </div>
          </div>
        </a>
      </div>
    )
  }
}

class Q1 extends Component {
  // CONSTRUCTOR
  constructor(props) {
    super(props);
    this.state = {
      pakistan: true
    };
  }
  // TOGGLER FUNCTION
  changeHeading() {
    return this.setState ({
      pakistan: !this.state.pakistan
    })
  }
  // RENDER
  render() {
    return (
      <div className="center q1">
        <h1 className="headingQ1 green-text">Hello<br /> {this.state.pakistan ? 'Pakistan' : 'World'}</h1>
        <button className="btn-large pulse green" onClick={() => this.changeHeading()}>
          toggler
        </button>
      </div>
    )
  }
}

// MAIN CLASS
class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <div className = "container">
          <AuthorIntro />
          <Q1 />
        </div>
      </div>
    );
  }
}

export default App;
