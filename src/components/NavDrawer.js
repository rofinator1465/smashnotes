// Replaced by MainDrawer
import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Button from '@material-ui/core/Button';
import Drawer from '@material-ui/core/Drawer';

export class NavDrawer extends Component {
  constructor(props){
    super(props);
    this.state = {
    };
  }
  
  render() {
    return (
      <Drawer id="navDrawer-wrapper" open={this.props.drawerOpen}>
        <ul className="navDrawer">
          <li className="navDrawer-brand">
            <NavLink exact to="/">
              <img
                src={require("../assets/smashnotes-brand.svg")}
                alt="Smashnotes branding"
                width="100%"
              />
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
            <NavLink to="/Tourney">Tourney MoAddde</NavLink>
          </li>

          <br />

          <li className="navDrawer-subtitle">Quick Notes</li>

          <li>
            <NavLink to="/ViewQuickNotes">View Your Quick Notes</NavLink>
          </li>

          <li>
            <Button variant="outlined" onClick={this.props.handleModalOpen}>
              Add Quick Note
            </Button>
          </li>
        </ul>
      </Drawer>
    );
  }
}
