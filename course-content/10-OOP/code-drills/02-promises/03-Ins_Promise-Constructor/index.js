const fs = require("fs");

function readFileAsync(path, encoding) {
  return new Promise(function(resolve, reject) {
    fs.readFile(path, encoding, function(err, data) {
      if (err) {
        return reject(err);
      }

      resolve(data);
    });
  });
}

readFileAsync("example.txt", "utf8")
  .then(function(data) {
    console.log(data);
  })
  .catch(function(err) {
    console.log(err);
  });


function beHappy(name) {
  return new Promise(function(happyPath, sadPath) {
    //do some work
    let err; 
    if(name !== "Farley"){
      err = "So Sad you are not Farley"
    }
    if (err) {
      return sadPath(err);
    }

    happyPath("So good to be " + name);
  
  });
}


beHappy("Asher").then(function(data) {
    console.log(data);
  })
  .catch(function(err) {
    console.log(err);
  });

beHappy("Farley").then(function(data) {
    console.log(data);
  })
  .catch(function(err) {
    console.log(err);
  });