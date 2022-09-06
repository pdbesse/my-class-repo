import React from "react";
import Todo from "../Todo";
import bg from "../../images/bg1.jpg"

function Background() {
    return (
        <div>
            <div  styles={{ backgroundImage:`url(${bg})` }} />
            <Todo />
        </div>
    )
}

export default Background;