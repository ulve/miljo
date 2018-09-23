import React from "react";
import Environment from "./Environment.js"

export default (props) => (
    <div className="column">
        {props.data.map(e => <section><Environment data={e} /></section>)}
    </div>)
