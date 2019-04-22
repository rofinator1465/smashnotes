import React, { Component } from "react";
import "./App.css";
import { SideNavBar } from "./components/sideNavBar";
import { MainNav } from "./components/mainNav";
import { HashRouter, Route } from "react-router-dom/cjs/react-router-dom.min";
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
      <HashRouter>
        <div id="wrapper">
          <SideNavBar />
          <div id="page-content-wrapper">
            <MainNav />
            <Route exact path="/" component={Recent} />
            <Route path="/Practice" component={Practice} />
            <Route path="/Lab" component={Lab} />
            <Route path="/Matchups" component={Matchups} />
            <Route path="/Notes" component={Notes} />
            <Route path="/Tourney" component={Tourney} />
          </div>
        </div>
        </HashRouter>
      </div>
    );
  }
}

export default App;