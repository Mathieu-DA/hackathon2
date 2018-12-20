import React, { Component } from "react";
import "./styles/App.css";
import "./navbar.css";

import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";

class Navigation extends Component {
  render() {
    return (
      <div>
        <Navbar className="mynavbar">
          <NavbarBrand className="logohome" href="/">
            <img src="http://achat-tampon.fr/wp-content/uploads/2017/02/rond-logo.jpg" />
          </NavbarBrand>
          <Nav className="navigation">
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
