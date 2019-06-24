import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import IconButton from "@material-ui/core/IconButton";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import MenuIcon from "@material-ui/icons/Menu";
import MoreVertIcon from "@material-ui/icons/MoreVert";

export class MainNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      anchorEl: null
    };
    this.handleMenuClick = this.handleMenuClick.bind(this);
    this.handleMenuClose = this.handleMenuClose.bind(this);
  }

  handleMenuClick(event) {
    this.setState({ anchorEl: event.currentTarget });
  }

  handleMenuClose() {
    this.setState({ anchorEl: null });
  }

  render() {
    return (
      <AppBar>
        <Toolbar className="navbar">
          <IconButton
            aria-controls="NavDrawer"
            aria-haspopup="true"
            onClick={this.props.toggleClass}
          >
            <MenuIcon />
          </IconButton>
          <img
            src={require("../assets/logotransparent.svg")}
            alt="Smashnotes logo"
            height="40"
          />
          SmashNot.es
          <IconButton
            aria-controls="settingsNav"
            aria-haspopup="true"
            onClick={this.handleMenuClick}
          >
            <MoreVertIcon />
          </IconButton>
          <Menu
            id="settingsNav"
            anchorEl={this.state.anchorEl}
            open={this.state.anchorEl}
            onClose={this.handleClose}
            aria-haspopup="true"
            aria-expanded="false"
          >
            <MenuItem onClick={this.handleMenuClose}>
              <NavLink exact to="/">
                Create an Account
              </NavLink>
            </MenuItem>
            <MenuItem onClick={this.handleMenuClose}>
              <NavLink to="/">Log In</NavLink>
            </MenuItem>
            <MenuItem onClick={this.handleMenuClose}>
              <NavLink to="/">Sign Out</NavLink>
            </MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
    );
  }
}
