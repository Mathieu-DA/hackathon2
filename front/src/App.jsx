import React, { Component } from "react";
import { Route, Switch, BrowserRouter, NavLink } from "react-router-dom";
import { Navbar, NavbarBrand, NavItem, Nav } from "reactstrap";
import Challenges from "./components/Challenge";
import MonEquipe from "./components/MonEquipe";
import "./styles/App.css";
import "./styles/navbar.css";
import Team from "./components/Team";
import Logo from "./img/logo.png";
import Success from "./components/Success";

const App = () => (
  <div className="App">
    <BrowserRouter>
      <div>
        <Navbar className="mynavbar">
          <NavbarBrand className="logohome" href="/">
            <img src={Logo} alt="Coup de Pousse" />
          </NavbarBrand>
          <Nav className="navigation">
            <NavItem className="itemMenu">
              <NavLink exact to="/" activeClassName="activeLien">
                Mes challenges
              </NavLink>
            </NavItem>
            <NavItem className="itemMenu">
              <NavLink exact to="/MonEquipe" activeClassName="activeLien">
                Mon équipe
              </NavLink>
            </NavItem>
            <NavItem className="itemMenu">
              <NavLink exact to="/success" activeClassName="activeLien">
                Mes réussites
              </NavLink>
            </NavItem>
          </Nav>
        </Navbar>
        <Switch>
          <Route exact path="/" component={Challenges} />
          <Route exact path="/MonEquipe" component={MonEquipe} />
          <Route exact path="/success" component={Success} />
        </Switch>
      </div>
    </BrowserRouter>
  </div>
);

export default App;
