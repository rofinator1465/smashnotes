import React from "react";
import { NavLink } from "react-router-dom";

import clsx from "clsx";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import NoteAddIcon from "@material-ui/icons/NoteAdd";
import MailIcon from "@material-ui/icons/Mail";

export default function MainDrawer({ classes, theme, drawerOpen, handleDrawerClose }) {
  return (
    <Drawer
      variant="permanent"
      className={clsx(classes.drawer, {
        [classes.drawerOpen]: drawerOpen,
        [classes.drawerClose]: !drawerOpen
      })}
      classes={{
        paper: clsx({
          [classes.drawerOpen]: drawerOpen,
          [classes.drawerClose]: !drawerOpen
        })
      }}
      open={drawerOpen}
    >
      <div className={classes.toolbar}>
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === "rtl" ? (
            <ChevronRightIcon />
          ) : (
            <ChevronLeftIcon />
          )}
        </IconButton>
      </div>
      <Divider />
      <List>
        <NavLink to="/Practice">
          <ListItem button key="Practice Session">
            <ListItemIcon>
              <NoteAddIcon />
            </ListItemIcon>
            <ListItemText primary="Practice Session" />
          </ListItem>
        </NavLink>
        <NavLink to="/Lab">
          <ListItem button key="Lab">
            <ListItemIcon>
              <MailIcon />
            </ListItemIcon>
            <ListItemText primary="Lab" />
          </ListItem>
        </NavLink>
        <NavLink to="/Matchups">
          <ListItem button key="Matchups">
            <ListItemIcon>
              <MailIcon />
            </ListItemIcon>
            <ListItemText primary="Matchups" />
          </ListItem>
        </NavLink>
        <NavLink to="/Tourney">
          <ListItem button key="Tourney">
            <ListItemIcon>
              <MailIcon />
            </ListItemIcon>
            <ListItemText primary="Tourney Mode" />
          </ListItem>
        </NavLink>
      </List>
      <Divider />
      <List>
      <NavLink to="/ViewQuickNotes">
          <ListItem button key="ViewQuickNotes">
            <ListItemIcon>
              <MailIcon />
            </ListItemIcon>
            <ListItemText primary="ViewQuickNotes" />
          </ListItem>
        </NavLink>
      </List>
    </Drawer>
  );
}
