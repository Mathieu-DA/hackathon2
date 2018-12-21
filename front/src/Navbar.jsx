import React, { Component } from "react";
import { Route, Switch, BrowserRouter, NavLink } from "react-router-dom";
import "./styles/App.css";
import "./navbar.css";
import { Navbar, NavbarBrand, Nav, NavItem } from "reactstrap";
import Team from "./components/Team";
import Challenges from "./components/Challenge";

class Navigation extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar className="mynavbar">
            <NavbarBrand className="logohome" href="/">
              <img src="http://achat-tampon.fr/wp-content/uploads/2017/02/rond-logo.jpg" />
            </NavbarBrand>
            <div className="navigation">
              <NavItem>
                <NavLink exact to="/" activeClassName="activeLien">
                  Mes challenges
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink exact to="/MonEquipe" activeClassName="activeLien">
                  Mon équipe
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/success">Mes réussites</NavLink>
              </NavItem>
            </div>
          </Navbar>
          <Switch>
            <Route exact path="/" component={Challenges} />
            <Route exact path="/MonEquipe" component={MonEquipe} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default Navigation;
