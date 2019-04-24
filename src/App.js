import React, { Component } from "react";
import "./App.css";
import { NavDrawer } from "./components/NavDrawer";
import { MainNav } from "./components/mainNav";
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
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div class="d-flex flex-column flex-grow">
            <div class="h-100 flex-grow">
              <div className="bmd-layout-container bmd-drawer-f-l">
                <MainNav />
                <NavDrawer />
                <main class="bmd-layout-content">
                  <div class="container">
                    <Route exact path="/" component={Recent} />
                    <Route path="/Practice" component={Practice} />
                    <Route path="/Lab" component={Lab} />
                    <Route path="/Matchups" component={Matchups} />
                    <Route path="/Notes" component={Notes} />
                    <Route path="/Tourney" component={Tourney} />
                  </div>
                </main>
              </div>
            </div>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
