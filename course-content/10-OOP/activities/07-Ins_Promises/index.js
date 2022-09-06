// Promise example using a real-life promise
// The real-life promise in this scenario is a child asking his parents for a Nintendo Switch

const choresDone = true;

// Promise
const willGetSwitch = new Promise((resolve, reject) => {
  // Check for a desireable outcome, if so resolve the promise
  if (choresDone) {
    const reward = {
      name: 'Nintendo Switch',
      desired: true,
    };
    resolve(reward);

    // Otherwise reject the promise
  } else {
    const issue = new Error('Child did not finish chores as promised');
    reject(issue);
  }
});

// Another promise to call only if we get the reward
const playGames = (reward) => {
  const message = `I am playing games on my new ${reward.name}`;
  return Promise.resolve(message);
};

willGetSwitch
  .then(playGames)
  .then((resolved) => console.log(resolved))
  .catch((err) => console.error(err));


//---------------------Another Example


const fs = require("fs");

function readFileAsync(path, encoding) {
  return new Promise(function(resolve, reject) {
    fs.readFile(path, encoding, function(err, farley) {
      if (err) {
        return reject(err);
      }

      resolve(farley);
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
    console.log("*******beHappy('Asher')*******");
    console.log(data);
  })
  .catch(function(err) {
    console.log(err);//this line
  });

beHappy("Farley").then(function(data) {
    console.log("*******beHappy('Farley')*******");
    console.log(data);//this line
  })
  .catch(function(err) {
    console.log(err);
  });


//---------------------Another Example

function waitFor(seconds) {
  return new Promise(function(resolve, reject) {
    if (isNaN(seconds) || seconds < 1) {
      return reject(Error("Parameter 'seconds' must be a positive number!"));
    }

    setTimeout(function() {
      resolve("Success!");
    }, seconds * 1000);
  });
}

waitFor(2)
  .then(function(msg) {
    console.log("*******waitFor*******")
    console.log(msg);
  })
  .catch(function(err) {
    console.log(err);
  });

// waitFor(-2)
//   .then(function(msg) {
//     console.log(msg);
//   })
//   .catch(function(err) {
//     console.log("Ugh!")
//     console.log(err);
//   });


//===============yet Another Example

// const fs = require('fs');

// an implementation of promisify
const promisify = function(fn) {
  // promisify returns a function that returns a promise so you can do
  // fn(args) => returns a promise so
  // fn(args).then(() => {});
  // is the same as
  // promise.then(() => {});
  return function(...args) {
    // return a new promise
      return new Promise((resolve,reject) => {
        // we invoke the function that we actually passed in
        // fn(args,function(err.data) {})
        // is the same as
        // fs.writeFile(args, function(err,data) {});
          fn(...args, function (err, data) {
              if (err) {
                // on error reject PROMISE!!!
                  return reject(err);
              }
              // else we succeeded then resolve PROMISE!!!
              resolve(data);
          });
      });
  }
}



let promisifiedWriteFile = promisify(fs.writeFile);

// Data: OK
promisifiedWriteFile("filename.txt", "DATA").then((data) => {
  console.log("Data: "+data); // Data: undefined
}).catch((err) => {
  console.log(err);
});

// Error: you can't write to a directory!
promisifiedWriteFile(".", "DATA").then((data) => {
  console.log("Data: "+data);
}).catch((err) => {
  console.log(err);//Error: LONG ERROR
});
