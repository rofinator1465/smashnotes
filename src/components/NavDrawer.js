import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export class NavDrawer extends Component {
  render() {
    return (
        <nav id="navDrawer" className="bmd-layout-drawer bg-faded">
          <ul>
            <li className="navbar-brand">
              <NavLink exact to="/">
                SmashNot.es
              </NavLink>
            </li>
            <li>
              <NavLink to="/Practice">Practice Session</NavLink>
            </li>

            <li>
              <NavLink to="/Lab">Lab</NavLink>
            </li>

            <li>
              <NavLink to="/Matchups">Matchups</NavLink>
            </li>

            <li>
              <NavLink to="/Notes">Quick Notes</NavLink>
            </li>

            <li>
              <NavLink to="/Tourney">Tourney Mode</NavLink>
            </li>
          </ul>
        </nav>
    );
  }
}
