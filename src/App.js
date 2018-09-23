import React, { Component } from "react";
import Content from "./Content.js";
import Sidebar from "./Sidebar.js";
import jsyaml from "js-yaml";

const url =
  "https://gist.githubusercontent.com/ulve/3d07cecf44e8750ea8e7751260bebd81/raw/e251619480db07f8c62c39eeea9c48f7ee434853/milj%25C3%25B6er.yaml";

const menyData = data =>
  data.miljöer.map(m => ({
    miljö: m.miljö,
    servrar: m.servrar.map(s => s.server)
  }));

const miljöer = data => data.miljöer;

class App extends Component {
  state = { data: { miljöer: [] } };
  render() {
    return (
      <div className="App">
        <div>
          <section className="main-content columns is-fullheight">
            <Sidebar data={menyData(this.state.data)} />

            <Content data={miljöer(this.state.data)} />
          </section>
        </div>
      </div>
    );
  }

  componentDidMount() {
    fetch(url)
      .then(response => response.text())
      .then(blob => jsyaml.load(blob))
      .then(doc => {
        console.log(doc);
        this.setState({ data: doc });
      });
  }
}

export default App;
