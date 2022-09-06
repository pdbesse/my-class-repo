import React from "react";

function Display(props) {
    return (
        <div>
            <div className="card" style={{width: "250px"}}>
                <div className="card-body">
                    <h4 className="card-title">{props.word}</h4>
                    <p className="card-text">n: {props.meaning}</p>
                </div>
            </div>
        </div>
    )
}

export default Display;