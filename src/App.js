import React from "react";
import {
  BrowserRouter,
  Route
} from "react-router-dom/cjs/react-router-dom.min";

//Firebase
import * as firebaseui from "firebaseui";

//Components and Styles
import "./App.css";
import MainDrawer from "./components/MainDrawer";
import MainAppBar from "./components/MainAppBar";
import { Recent } from "./components/Recent";
import { Practice } from "./components/Practice";
import { Lab } from "./components/Lab";
import { Matchups } from "./components/Matchups";
import { QuickNotes } from "./components/QuickNotes";
import { Tourney } from "./components/Tourney";

import Container from "@material-ui/core/Container";
import Modal from "@material-ui/core/Modal";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginRight: 36
  },
  hide: {
    display: "none"
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap"
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    overflowX: "hidden",
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9) + 1
    }
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3)
  }
}));

function App() {
  const classes = useStyles();
  const theme = useTheme();
  const userContext = React.createContext({
    user: null
  });
  const [modalOpen, setModalOpen] = React.useState(false);
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const handleModalOpen = () => {
    setModalOpen(true);
  };
  const handleModalClose = () => {
    setModalOpen(false);
  };
  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };
  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  return (
    <div className="App">
      <div className={classes.root}>
        <CssBaseline />
        <BrowserRouter>
          <MainAppBar
            classes={classes}
            drawerOpen={drawerOpen}
            handleDrawerOpen={handleDrawerOpen}
          />
          <MainDrawer
            classes={classes}
            theme={theme}
            drawerOpen={drawerOpen}
            handleDrawerClose={handleDrawerClose}
            handleModalOpen={handleModalOpen}
          />

          <main className={classes.content}>
            <div className={classes.toolbar} />
            <Modal open={modalOpen} onClose={handleModalClose}>
              <Paper className="modal">
                <QuickNotes handleModalClose={handleModalClose} />
              </Paper>
            </Modal>
            <Container>
              <Route exact path="/" component={Recent} />
              <Route path="/Practice" component={Practice} />
              <Route path="/Matchups" component={Matchups} />
              <Route path="/Lab" component={Lab} />
              <Route path="/Tourney" component={Tourney} />
            </Container>
          </main>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
