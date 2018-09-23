import React, { Component } from "react";
import Content from "./Content.js";
import Sidebar from "./Sidebar.js";
import data from './data.js'

const menyData = data.miljöer.map(m => ({ miljö: m.miljö, servrar: m.servrar.map(s => s.server) }) )
const miljöer = data.miljöer;

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <section className="main-content columns is-fullheight">
           
              <Sidebar data={menyData} />
            
              <Content data={miljöer}/>
            
          </section>
        </div>
      </div>
    );
  }
}

export default App;
