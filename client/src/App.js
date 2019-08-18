// import React, { Component } from "react";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import Nav from "./components/Nav";
import Search from "./pages/Search";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        {/* <Switch> */}
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload. Hey
          my name's Kevin!
        </p>
        <Route exact path="/" component={Search} />
        {/* </Switch> */}
      </div>
    </Router>
  );
}

export default App;
