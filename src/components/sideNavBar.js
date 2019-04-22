import React, { Component } from "react";
import $ from "jquery";
import {
    NavLink,
  } from "react-router-dom";

export class SideNavBar extends Component {
  componentDidMount() {
    $("#menu-toggle").click(function(e) {
      e.preventDefault();
      $("#wrapper").toggleClass("toggled");
    });
  }

  render() {
    return (
      <div id="sidebar-wrapper">
        <ul className="sidebar-nav">
          <li className="sidebar-brand">
            <NavLink exact to="/">SmashNot.es</NavLink>
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
      </div>
    );
  }
}
