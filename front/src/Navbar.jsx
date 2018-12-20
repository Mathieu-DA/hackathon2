import React, { Component } from "react";
import "./App.css";
import "./navbar.css";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

class Navigation extends Component {
  render() {
    return (
      <div>
        <Navbar>
          <NavbarBrand href="/">Coup de pousse</NavbarBrand>
          <Nav>
            <NavItem>
              <NavLink href="#">Mes challenges</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Mon équipe</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Mes réussites</NavLink>
            </NavItem>
          </Nav>
        </Navbar>
      </div>
    );
  }
}

export default Navigation;
