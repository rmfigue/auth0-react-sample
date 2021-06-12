import {NavLink} from "react-router-dom";
import React from "react";

const MainNav = () => (
  <div className="navbar-nav mr-auto">
    <NavLink
      to="/"
      exact
      className="nav-link"
      activeClassName="router-link-exact-active"
    >
      Inicio
    </NavLink>
    <NavLink
      to="/profile"
      exact
      className="nav-link"
      activeClassName="router-link-exact-active"
    >
      Perfil de Usuario
    </NavLink>
    <NavLink
      to="/external-api"
      exact
      className="nav-link"
      activeClassName="router-link-exact-active"
    >
      API Externa
    </NavLink>
  </div>
);

export default MainNav;
