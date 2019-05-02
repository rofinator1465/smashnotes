import React, { Component } from "react";

export class MainNav extends Component {
  render() {
    return (
      <nav className="navbar sticky-top navbar-dark bg-dark text-light">
        <a
          className="btn btn-default navbar-toggler"
          href="#menu-toggle"
          id="menu-toggle"
          onClick={this.props.toggleClass}
        >
          <span className="navbar-toggler-icon" />
        </a>
        <span className="navbar-brand mr-auto" href="">
          <img src={require("../logotransparent.svg")} alt="Smashnotes logo" height="40" />
          SmashNot.es
        </span>
      </nav>
    );
  }
}