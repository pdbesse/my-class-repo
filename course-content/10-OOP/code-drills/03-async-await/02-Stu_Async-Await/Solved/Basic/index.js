const fs = require("fs");
const util = require("util");

const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

async function combineAnimals() {
  try {
    const hamster = await readFileAsync("hamster.json", "utf8");
    const dog = await readFileAsync("dog.json", "utf8");
    const cat = await readFileAsync("cat.json", "utf8");
    const goldfish = await readFileAsync("goldfish.json", "utf8");

    const animalJSON = [hamster, dog, cat, goldfish].map(JSON.parse);

    await writeFileAsync(
      "combined.json",
      JSON.stringify(animalJSON, null, 2),
      "utf8"
    );

    console.log("Successfully wrote to 'combined.json' file");
  } catch (err) {
    console.log(err);
  }
}

// combineAnimals();








console.log("I was console.logged before anything else");

async function waitForMe(){
  console.log("You did not wait for me")
  try {
    await combineAnimals();
    console.log("You waited for me")
  }catch (err) {
  }
}
waitForMe()

