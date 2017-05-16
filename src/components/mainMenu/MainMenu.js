import React from 'react';
import { NavLink } from 'react-router-dom'
import './mainMenu.css'

const MainMenu = () =>
  (
    <div className="app-main-navigation">
      <header>
        <NavLink to="/home">ReactJs Workshop</NavLink>
        <NavLink to="/home" className="app-nav-item" activeClassName="selected">Home</NavLink>
        <NavLink to="/users" className="app-nav-item" activeClassName="selected">Users</NavLink>
      </header>
    </div>
  );
export default MainMenu;
