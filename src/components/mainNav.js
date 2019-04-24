import React, { Component } from "react";

export class MainNav extends Component {
  render() {
    return (
      <header className="bmd-layout-header">
        <nav className="navbar sticky-top navbar-dark bg-dark text-light">
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="drawer"
            data-target="#navDrawer"
          >
            <span class="sr-only">Toggle drawer</span>
            <i class="material-icons">menu</i>
          </button>
          <a className="navbar-brand mr-auto" href="/">
            <img src={require("../logotransparent.svg")} height="40" />
            SmashNot.es
          </a>
        </nav>
      </header>
    );
  }
}
