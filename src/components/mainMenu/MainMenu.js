import React, { Component } from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

class MainMenu extends Component{
  render(){
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#">ReactJs Workshop</a>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
          <NavItem eventKey={1} href="#">Home</NavItem>
          <NavItem eventKey={2} href="#">Users</NavItem>
          <NavDropdown eventKey={3} title="Actions" id="basic-nav-dropdown">
            <MenuItem eventKey={3.1}>Home</MenuItem>
            <MenuItem eventKey={3.2}>Create User</MenuItem>
            <MenuItem divider />
            <MenuItem eventKey={3.3}>Users</MenuItem>
          </NavDropdown>
        </Nav>
      </Navbar>
    )
  }
}
export default MainMenu;
