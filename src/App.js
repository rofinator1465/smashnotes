import React, { Component } from "react";
import {
  BrowserRouter,
  Route
} from "react-router-dom/cjs/react-router-dom.min";

//Firebase
import * as firebaseui from "firebaseui";

//Components and Styles
import "./App.css";
import { NavDrawer } from "./components/NavDrawer";
import { MainNav } from "./components/MainNav";
import { Recent } from "./components/Recent";
import { Practice } from "./components/Practice";
import { Lab } from "./components/Lab";
import { Matchups } from "./components/Matchups";
import { QuickNotes } from "./components/QuickNotes";
import { Tourney } from "./components/Tourney";

import Container from '@material-ui/core/Container';
import Modal from "@material-ui/core/Modal";
import Paper from '@material-ui/core/Paper';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggled: false,
      open: false
    };
    this.toggleClass = this.toggleClass.bind(this);
    this.handleModalClose = this.handleModalClose.bind(this);
    this.handleModalOpen = this.handleModalOpen.bind(this);
  }

  handleModalOpen() {
    this.setState({ open: true });
  }

  handleModalClose() {
    this.setState({ open: false });
  }

  toggleClass() {
    const currentState = this.state.toggled;
    this.setState({ toggled: !currentState });
  }


  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div id="wrapper" className={this.state.toggled ? "toggled" : null}>
            <NavDrawer handleModalOpen={this.handleModalOpen} />
            <div id="page-content-wrapper">
              <MainNav toggleClass={this.toggleClass} />
                <Modal open={this.state.open} onClose={this.handleModalClose} >
                  <Paper className="modal">
                    <QuickNotes handleModalClose={this.handleModalClose} />
                  </Paper>
                </Modal>
              <Container>
                <Route exact path="/" component={Recent} />
                <Route path="/Practice" component={Practice} />
                <Route path="/Lab" component={Lab} />
                <Route path="/Matchups" component={Matchups} />
                <Route path="/Tourney" component={Tourney} />
              </Container>
            </div>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
