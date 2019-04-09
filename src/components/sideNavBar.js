import React, { Component } from 'react';
import $ from 'jquery';

export class SideNavBar extends Component {

  componentDidMount() {
    $("#menu-toggle").click(function(e) {
        e.preventDefault();
    $("#wrapper").toggleClass("toggled");
    });
  };
    
  render() {
    return (
    <div id="sidebar-wrapper">
        <ul className="sidebar-nav">
            <li className="sidebar-brand">
                <a href="/">
                    smashnot.es
                </a>
            </li>
            <li>
                <a href="/">Practice Session</a>
            </li>
            
            <li>
                <a href="/">Lab</a>
            </li>
            
            <li>
                <a href="/">Matchups</a>
            </li>
            
            <li>
                <a href="/">Quick Notes</a>
            </li>

            <li>
                <a href="/">Tourney Mode</a>
            </li>
        </ul>
    </div>
        );
    }
}