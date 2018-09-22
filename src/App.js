import React, { Component } from "react";
import Content from "./Content";
import Sidebar from "./Sidebar.js";
import data from './data.js'

const menyData = data.miljöer.map(m => ({ miljö: m.miljö, servrar: m.servrar.map(s => s.server) }) )

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <section className="main-content columns is-fullheight">
           
              <Sidebar data={menyData} />
            
            <div className="container column is-9">
              <Content />
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default App;
