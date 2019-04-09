import React, { Component } from 'react';

export class MainNav extends Component {

    render() {
        return (
            <nav className="navbar sticky-top navbar-dark bg-dark text-light">
                <a className="btn btn-default navbar-toggler" href="#menu-toggle" id="menu-toggle">
                <span className="navbar-toggler-icon"></span>
                </a>
                <a className="navbar-brand mr-auto" href="/">
                    <img src={require('../logotransparent.svg')} height="55" />
                    smashnot.es
                </a>
            </nav>
        );
    }
}