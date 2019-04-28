import React, { Component } from "react";
import "./App.css";
import { NavDrawer } from "./components/NavDrawer";
import { MainNav } from "./components/MainNav";
import {
  BrowserRouter,
  Route
} from "react-router-dom/cjs/react-router-dom.min";
import { Recent } from "./components/Recent";
import { Practice } from "./components/Practice";
import { Lab } from "./components/Lab";
import { Matchups } from "./components/Matchups";
import { Notes } from "./components/Notes";
import { Tourney } from "./components/Tourney";

class App extends Component {
  constructor(props) {
    super(props);
    this.toggleClass = this.toggleClass.bind(this);
    this.state = {
      toggled: false,
    }
  }

  toggleClass() {
    this.setState((prevState) => {
      return { toggled: !prevState.toggled }
    });
  }

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div id="wrapper">
            <NavDrawer />
            <div id="page-content-wrapper">
              <MainNav />
              <div class="modal fade" id="quickNotes" tabindex="-1" role="dialog" aria-labelledby="quickNotes" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered" role="document">
                  <Notes />
                </div>
              </div>
              <div className="container p-3">
                <Route exact path="/" component={Recent} />
                <Route path="/Practice" component={Practice} />
                <Route path="/Lab" component={Lab} />
                <Route path="/Matchups" component={Matchups} />
                <Route path="/Tourney" component={Tourney} />
              </div>
            </div>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;