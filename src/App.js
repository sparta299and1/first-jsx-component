import React, { Component } from 'react';
import logo from './logo.svg'; // Import the resource
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" /> {/* Use imported resource */}
          <h1 className="App-title">{this.props.message}</h1> {/* Use the passed value */}
          <button onClick={() => this.sayHello()}>Click me</button> {/* Call an internal function */}
        </header>
        <AppIntro /> {/* Use another component */}
        <p>
          --- Nothing to say more ---
        </p>
      </div>
    );
  }

  // Declare a internal function to use
  sayHello() {
    alert('Hello, ahihi!');
  }
}

class AppIntro extends Component {
  render() {
    return (
      <p className="App-intro">
        This is the App intro
      </p>
    )
  }
}

export default App;
