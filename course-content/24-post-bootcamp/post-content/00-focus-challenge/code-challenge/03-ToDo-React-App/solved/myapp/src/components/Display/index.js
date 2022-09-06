import React from "react";
const FA = require("react-fontawesome");

function Display(props) {
    console.log(props);
    const backgroundColor = ["69A0FF", "#d64161", "#D469FF", "#FFEE75", "#FFEFB5", "#463B80"];
    var randomColor = Math.floor(Math.random() * backgroundColor.length);
    const color = backgroundColor[randomColor];

    return (
        <div className="shadow-lg p-3 mb-5 rounded" style={{backgroundColor: color}}>
                <h1>{props.item} <FA name="check" className="check" onClick={props.handleDelete} id={props.id} /></h1>
        </div>
    )
}

export default Display;
