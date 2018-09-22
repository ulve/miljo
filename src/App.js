import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Content from "./Content";
import Sidebar from "./Sidebar.js";
import Footer from "./Footer.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div id="app">
          <section className="main-content columns is-fullheight">
            <div className="column is-2 is-narrow-mobile is-fullheight section is-hidden-mobile">
              <Sidebar />
            </div>
            <div className="container column is-10">
              <Content />
            </div>
          </section>
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
