import React from 'react';
import {Route, Redirect, HashRouter} from 'react-router-dom';
import MainMenu from '../mainMenu/MainMenu';
import Home from '../home/Home';
import User from '../user/User';
import Users from '../user/Users';
import logo from '../../content/logo.svg';
import './app.css';

const App = () =>
  (
      <HashRouter>
        <div className="app">
          <MainMenu />
          <div className="app-header">
            <img src={logo} className="app-logo" alt="logo" />
            <h2>Welcome to Velocity React Workshop</h2>
          </div>
          <div className="app-page">
            <Route exact path="/home" component={Home} />
            <Route exact path="/users" component={Users} />
            <Route path="/user/:id" component={User} />
            <Redirect from="/" to="/home"/>
          </div>
        </div>
      </HashRouter>
  );


export default App;
