import React from "react";
import Server from "./Server.js"
import Settings from "./Settings.js"

const left = data => {
    var half = Math.ceil(data.length / 2);
    return data.splice(0, half).map(s => <Server data={s} />) 
}

const right = data => {
    var half = Math.floor(data.length / 2);
    return data.splice(half, data.length).map(s => <Server data={s} />) 
}

export default (props) => (
    <section>
        <div className="container column">
            <section>
                <h1 className="title" id={props.data.miljö}>{props.data.miljö}</h1>
            </section>
        </div>
        <div className="container column">
            <div className="container columns">
                <div className="container column ">
                    {left(props.data.servrar)}
                </div>
                <div className="container column">
                    {right(props.data.servrar)}
                </div>
            </div>
        </div>
        <div className="container column">
            <section>
                <Settings data={props.data.inställningar} />
            </section>
        </div>
    </section>);
