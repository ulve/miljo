import React from "react";
import CardHeader from "./CardHeader.js";
import CardServerContent from "./CardServerContent.js";

export default class Server extends React.Component {
  state = {expanded: false} 
  onClick =() => {
    this.setState(prevState => {
      return ({expanded: !prevState.expanded})
    });
  }

  render(props) {
    return <section>
      <div className="card">
        <CardHeader title={this.props.data.server} 
        expanded={this.state.expanded} 
        onClick={this.onClick}/>
        <CardServerContent data={this.props.data} />
      </div>
    </section>;
  }
}
