import React from "react";
import CardHeader from "./CardHeader.js";
import CardServerContent from "./CardServerContent.js";

export default class Server extends React.Component {
  state = {expanded: false} 
  onClick = () => {
    this.setState(prevState => {
      return ({expanded: !prevState.expanded})
    });
  }
  filter = () => {
    if(this.state.expanded)
      return this.props.data
    else
      return ({
        länkar: this.props.data.länkar
      })
    }
  render(props) {
    return <section>
      <div className="card">
        <CardHeader title={this.props.data.server} 
        expanded={this.state.expanded} 
        onClick={this.onClick}
        expandable={true}/>
        <CardServerContent data={this.filter(this.props.data)} />
      </div>
    </section>;
  }
}
