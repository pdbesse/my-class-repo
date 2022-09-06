// Import buttonClick function as dependency into entry point
import { buttonClick } from "./button";

//or
// const { buttonClick } = require("./button");

document.getElementById("btn").addEventListener("click", buttonClick);
