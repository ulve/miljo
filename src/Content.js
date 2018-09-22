import React from "react";
import Server from "./Server.js"

const left = data => {
    var half = Math.ceil(data.length / 2);
    return data.splice(0, half).map(s => <Server data={s} />) 
}

const right = data => {
    console.log(data)
    var half = Math.floor(data.length / 2);
    return data.splice(half, data.length).map(s => <Server data={s} />) 
}

export default (props) => (
    <div className="container column is-9">
        <div className="container columns ">
            <div className="container column is-6">
                {left(props.data)}
            </div>
            <div className="container column is-6">
                {right(props.data)}
            </div>
        </div>
    </div>);
