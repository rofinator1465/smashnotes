import React, { Component } from "react";
import { NavDrawer } from "./components/NavDrawer";
import { MainNav } from "./components/MainNav";
import {
  BrowserRouter,
  Route
} from "react-router-dom/cjs/react-router-dom.min";

//Components and Styles
import "./App.css";
import { Recent } from "./components/Recent";
import { Practice } from "./components/Practice";
import { Lab } from "./components/Lab";
import { Matchups } from "./components/Matchups";
import { QuickNotes } from "./components/QuickNotes";
import { Tourney } from "./components/Tourney";

class App extends Component {
  constructor(props) {
    super(props);
    this.toggleClass = this.toggleClass.bind(this);
    this.state = {
      toggled: false
    };
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
            <NavDrawer />
            <div id="page-content-wrapper">
              <MainNav toggleClass={this.toggleClass} />
              <section
                className="modal fade"
                id="quickNotes"
                tabIndex="-1"
                role="dialog"
                aria-labelledby="quickNotes"
                aria-hidden="true"
              >
                <div className="modal-dialog modal-dialog-centered" role="document">
                  <QuickNotes />
                </div>
              </section>
              <main className="container p-3">
                <Route exact path="/" component={Recent} />
                <Route path="/Practice" component={Practice} />
                <Route path="/Lab" component={Lab} />
                <Route path="/Matchups" component={Matchups} />
                <Route path="/Tourney" component={Tourney} />
              </main>
            </div>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
