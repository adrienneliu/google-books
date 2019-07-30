import React, { Component } from "react";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import Jumbotron from "./components/Jumbotron";
import Search from "./pages/Search";
import "./App.css";

class App extends Component {


  render() {
    return (
      <div className="App">
          <Nav/>
          <div className="container">
          <Jumbotron>
                <h1>(React) Google Books Search</h1>
                <h2> Search for and Save Books of Interest</h2>
            </Jumbotron>
      <Search></Search>
      </div>
      </div>
    );
  }
}

export default App;
