import React, { Component } from 'react';
import MainMenu from '../mainMenu/MainMenu';
import Home from '../home/Home';
import logo from '../../content/logo.svg';
import './app.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="app-header">
          <MainMenu />
          <img src={logo} className="app-logo" alt="logo" />
          <h2>Welcome to Velocity React Workshop</h2>
        </div>
        <div className="app-page">
          <Home />
        </div>
      </div>
    );
  }
}

export default App;
