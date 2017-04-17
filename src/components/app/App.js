import React, { Component } from 'react';
import {Route, BrowserRouter} from 'react-router-dom';
import MainMenu from '../mainMenu/MainMenu';
import Home from '../home/Home';
import logo from '../../content/logo.svg';
import './app.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <MainMenu />
          <div className="app-header">
            <img src={logo} className="app-logo" alt="logo" />
            <h2>Welcome to Velocity React Workshop</h2>
          </div>
          <div className="app-page">
              <Route exact path="/" component={Home} />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
