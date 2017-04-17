import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import './mainMenu.css'

class MainMenu extends Component{
  render(){
    return (
      <div className="app-main-navigation">
        <header>          
          <NavLink to="/">ReactJs Workshop</NavLink>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/Users">Users</NavLink>
        </header>
      </div>
    )
  }
}
export default MainMenu;
