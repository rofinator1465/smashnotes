import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export class NavDrawer extends Component {
  render() {
    return (
      <nav id="navDrawer-wrapper">
        <ul className="navDrawer">
          <li className="navDrawer-brand">
            <NavLink exact to="/">
            <img 
            src={require("../assets/smashnotes-brand.svg")}
            alt="Smashnotes branding"
            width='100%' />
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
            <NavLink to="/Tourney">Tourney Mode</NavLink>
          </li>

          <br />

          <li>Quick Notes</li>

          <li>
            <NavLink to="/ViewQuickNotes">View Your Quick Notes</NavLink>
          </li>

          <li>
            <a href="" data-toggle="modal" data-target="#quickNotes">
              Add Quick Note
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}
