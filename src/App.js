import React, { Component } from 'react';
import './App.css';
import { SideNavBar } from './components/sideNavBar';
import { MainNav } from './components/mainNav';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div id="wrapper">
          <SideNavBar />
          <div id="page-content-wrapper">
            <MainNav />
            <div className="jumbotron text-dark">
              <p className="lead">Here is a website that will allow you to measure your ability in the game supersmashbros for WiiU</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
