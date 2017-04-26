import React from 'react';
import { NavLink } from 'react-router-dom'
import './mainMenu.css'

const MainMenu = () =>
  (
    <div className="app-main-navigation">
      <header>
        <NavLink to="/">ReactJs Workshop</NavLink>
        <NavLink to="/Home" className="app-nav-item" activeClassName="selected">Home</NavLink>
        <NavLink to="/Users" className="app-nav-item" activeClassName="selected">Users</NavLink>
      </header>
    </div>
  );
export default MainMenu;
