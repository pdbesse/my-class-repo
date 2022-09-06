import React from "react";
import emoji from "../../emoji.json";

function Display(props) {
    console.log(props);
    const Style = {
        width: "18rem"
    }

    return (
        <div>
            <br></br>
            <div className="card" style={Style}>
                <img src={props.emoji.image} alt={props.search} className="card-img-top"></img>
            </div>
        </div>

    )
}

export default Display;