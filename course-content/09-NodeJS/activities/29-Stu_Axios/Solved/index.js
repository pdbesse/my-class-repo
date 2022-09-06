const fs = require("fs");
const axios = require("axios");
const inquirer = require("inquirer");

inquirer
  .prompt({
    message: "Enter your GitHub username:",
    name: "username"
  })
  .then(function({ username }) {
    const queryUrl = `https://api.github.com/users/${username}/repos?per_page=100`;

    axios.get(queryUrl).then(function(res) {
      console.log(res);
      console.log("===========");
      console.log(res.data);
      

       // One Option
      const repoNames = res.data.map(function(repo) {
        return repo.name;
      });
      
       // Alternatively
      // const repoNames = [];
      // for (var i = 0; i < res.data.length; i++) {
      //   repoNames.push(res.data[i].name);
      // }

      // Alternatively
      // writeNamesToFile(repoNames)
      // parseRepoNames(res.data);

      const repoNamesStr = repoNames.join("\n");

      fs.writeFile("repos.txt", repoNamesStr, function(err) {
        if (err) {
          throw err;
        }

        console.log(`Saved ${repoNames.length} repos`);
        // console.log(repoNames);
        console.log("Yeahhh")
      });

    });

    // console.log(res);// :(
  });




  function parseRepoNames(arr){
    const repoNames = res.data.map(function(repo) {
        return repo.name;
    });
    writeNamesToFile(repoNames)

  }

  function writeNamesToFile(nameArr){
    const repoNamesStr = nameArr.join("\n");

      fs.writeFile("repos.txt", repoNamesStr, function(err) {
        if (err) {
          throw err;
        }

        console.log(`Saved ${repoNames.length} repos`);
        // console.log(repoNames);
      });
    
  }


