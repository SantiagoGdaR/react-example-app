import React from 'react';
import {Route, Redirect, BrowserRouter} from 'react-router-dom';
import MainMenu from '../mainMenu/MainMenu';
import Home from '../home/Home';
import User from '../user/User';
import logo from '../../content/logo.svg';
import './app.css';

const App = () =>
  (
      <BrowserRouter>
        <div className="app">
          <MainMenu />
          <div className="app-header">
            <img src={logo} className="app-logo" alt="logo" />
            <h2>Welcome to Velocity React Workshop</h2>
          </div>
          <div className="app-page">
            <Route exact path="/Home" component={Home} />
            <Route exact path="/Users" component={User} />
            <Redirect from="/*" to="/Home" />
          </div>
        </div>
      </BrowserRouter>
  );


export default App;
