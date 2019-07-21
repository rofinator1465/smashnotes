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

export default function MainDrawer({
  classes,
  theme,
  drawerOpen,
  handleDrawerClose,
  handleModalOpen
}) {
  const [selectedIndex, setSelectedIndex] = React.useState();

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  const checkSelectedImage = index => {
    if (index === selectedIndex) {
      return "-colored";
    } else {
      return "";
    }
  };

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
        <NavLink
          to="/Practice"
          className="navLink"
          activeClassName="navLink-active"
        >
          <ListItem
            button
            selected={selectedIndex === 0}
            onClick={event => handleListItemClick(event, 0)}
            key="Practice Session"
          >
            <ListItemIcon>
              <img src={require(`../assets/practiceicon`+ checkSelectedImage(0) +`.svg`)} alt="practice icon" height="24" />
            </ListItemIcon>
            <ListItemText primary="Practice Session" />
          </ListItem>
        </NavLink>
        <NavLink
          to="/Matchups"
          className="navLink"
          activeClassName="navLink-active"
        >
          <ListItem
            button
            selected={selectedIndex === 1}
            onClick={event => handleListItemClick(event, 1)}
            key="Matchups"
          >
            <ListItemIcon>
              <img src={require(`../assets/matchupicon`+ checkSelectedImage(1) +`.svg`)} alt="matchup icon" height="24" />
            </ListItemIcon>
            <ListItemText primary="Matchups" />
          </ListItem>
        </NavLink>
        <NavLink to="/Lab" className="navLink" activeClassName="navLink-active">
          <ListItem
            button
            selected={selectedIndex === 2}
            onClick={event => handleListItemClick(event, 2)}
            key="Lab"
          >
            <ListItemIcon>
              <img src={require(`../assets/labicon`+ checkSelectedImage(2) +`.svg`)} alt="lab icon" height="24" />
            </ListItemIcon>
            <ListItemText primary="Lab" />
          </ListItem>
        </NavLink>
        <NavLink
          to="/Tourney"
          className="navLink"
          activeClassName="navLink-active"
        >
          <ListItem
            button
            selected={selectedIndex === 3}
            onClick={event => handleListItemClick(event, 3)}
            key="Tourney"
          >
            <ListItemIcon>
              <img src={require(`../assets/tourneyicon`+ checkSelectedImage(3) +`.svg`)} alt="tourney icon" height="24" />
            </ListItemIcon>
            <ListItemText primary="Tourney Mode" />
          </ListItem>
        </NavLink>
      </List>
      <Divider />
      <List>
        <NavLink
          to="/ViewQuickNotes"
          className="navLink"
          activeClassName="navLink-active"
        >
          <ListItem
            button
            selected={selectedIndex === 4}
            onClick={event => handleListItemClick(event, 4)}
            key="ViewQuickNotes"
          >
            <ListItemIcon>
              <img
                src={require("../assets/quicknote-view-icon.svg")}
                alt="view quick note icon"
                height="24"
              />
            </ListItemIcon>
            <ListItemText primary="View Quick Notes" />
          </ListItem>
        </NavLink>
        <ListItem button key="AddQuickNotes" onClick={handleModalOpen}>
          <ListItemIcon>
            <img
              src={require("../assets/quicknote-add-icon.svg")}
              alt="add quick note icon"
              height="24"
            />
          </ListItemIcon>
          <ListItemText className="navLink" primary="Add Quick Note" />
        </ListItem>
      </List>
    </Drawer>
  );
}
