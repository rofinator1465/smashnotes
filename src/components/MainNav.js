import React, { Component } from "react";

export class MainNav extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark sticky-top">
        <button
          className="navbar-toggler"
          type="button"
          onClick={this.props.toggleClass}
        >
        <span className="navbar-toggler-icon"></span>
        </button>
        <span className="navbar-brand mr-auto" href="">
          <img
            src={require("../assets/logotransparent.svg")}
            alt="Smashnotes logo"
            height="40"
          />
          SmashNot.es
        </span>
      </nav>
    );
  }
}
