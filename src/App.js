import React, { Component } from "react";
import Content from "./Content";
import Sidebar from "./Sidebar.js";
import data from './data.js'

const menyData = data.miljöer.map(m => ({ miljö: m.miljö, servrar: m.servrar.map(s => s.server) }) )
const miljö = data.miljöer[0];

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <section className="main-content columns is-fullheight">
           
              <Sidebar data={menyData} />
            
              <Content data={miljö.servrar}/>
            
          </section>
        </div>
      </div>
    );
  }
}

export default App;
