import React from "react";

import clsx from "clsx";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from '@material-ui/core/Typography';
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

export default function MainAppBar({ classes, drawerOpen, handleDrawerOpen }) {
  return (
    <AppBar
      position="fixed"
      className={clsx(classes.appBar, {
        [classes.appBarShift]: drawerOpen
      })}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="Open drawer"
          onClick={handleDrawerOpen}
          edge="start"
          className={clsx(classes.menuButton, {
            [classes.hide]: drawerOpen
          })}
        >
          <MenuIcon />
        </IconButton>
        <img
            src={require("../assets/logotransparent.svg")}
            alt="Smashnotes logo"
            height="40"
          />
          <Typography variant="h6" noWrap>
          SmashNot.es
          </Typography>
      </Toolbar>
    </AppBar>
  );
}
