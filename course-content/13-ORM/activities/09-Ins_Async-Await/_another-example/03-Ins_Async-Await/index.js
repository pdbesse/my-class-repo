const axios = require("axios");
const inquirer = require("inquirer");


console.log("I went first")
getMovie();//does not stall this function execution. 
console.log("I went first, too")

async function getMovie() {
  try {
    const { movie } = await inquirer.prompt({
      message: "Search a movie:",
      name: "movie"
    });
    console.log("I will not happen until inquirer.prompt resolves")
    const { data } = await axios.get(
      `https://www.omdbapi.com/?t=${movie}&apikey=trilogy`
    );
    console.log("I will not happen until axios.get resolves")

    console.log(data);
  
  } catch (err) {
    console.log("Ugh!")
    console.log(err);
  }
}
