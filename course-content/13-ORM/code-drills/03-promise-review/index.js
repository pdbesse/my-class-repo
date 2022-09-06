const request = require("request");
const axios = require("axios");
const fs = require("fs");
const util = require('util');

// Welcome to a Promise Review
// why do we need Promises? 

//===================================Synchronous JS===================================
//Synchronous JS
// What are synchronous action in javascript?
//JavaScript is always synchronous and single-threaded. 
//If you're executing a JavaScript block of code on a page then no other JavaScript on that page will currently be executed.

//Examples of Synchronous Actions 
let variable = 'value'; //variable declarations 
let arr = ["this","is","my","list"]; //variable declarations 
for(let i = 0; i < arr.length;i++){
    console.log(arr[i]);
};
//JS Built in Methods like forEach are also Synchronous in nature although they do take a callback as an argument
//the function argument can be "anonymous"
arr.forEach(function(elm){
    console.log(elm);
});

//the function argument can be named
function namedFunction(elm){
console.log(elm);
}

arr.forEach(namedFunction);
//The forEach method will execute the provided call back function on each element of the array - this is a Synchronous Action


function demoSynchronous(){
    //does some work in the order it was executed
    let sum = 2 + 2;
    console.log(sum);
}
demoSynchronous()



//===================================asynchronous JS===================================

//asynchronous JS
//https://nodejs.dev/learn/javascript-asynchronous-programming-and-callbacks#:~:text=Asynchronous%20means%20that%20things%20can,that%20it's%20impossible%20to%20notice.
//Asynchronous means that things can happen independently of the main program flow. 
//prime examples: 
//* AJAX calls (HTTP calls out into the world);
//* Reading/Writing/Appending to file
//* Reading / Writing / Updating / Deleting to a Database
//* Set Timeout / Set Interval 

//A PROBLEM ARISES
// Take a moment to examine the following function

function myTimeOut(){
    let returnVal; //current undefined
    const timeID = setTimeout(function(){
        returnVal = "I am the return value";
    }, 1000)
    return returnVal;
}

//Question: what will be the value of the following variable? 
let returnValue = myTimeOut();
console.log("returnValue: ", returnValue)
//Answer: undefined
//Question: Why will the value of `returnValue` be undefined? 
//Answer: 
// 1.  myTimeOut return a value is Synchronous - it is returned before it is assigned value within the setTimeout
// 2.  Anything that is "dependent" on the completion of the timeout should be
//     placed in the callback passed to the setTimeout call.

//Simple Answer: The variable assignment is happening Synchronously. The work of the function is taking place asynchronously.
//the varible is assigned value, undefined, before there is a return value returned from the function. 

//Question:How might we solve this issue? 
//Answer: Callbacks

//We can equipt and provide the `myTimeOut` function with a callback to execute once the work is done. 
// For example: 

function myTimeOutWithCallBack(cb){//when defining the function we set a function parameter to accept an argument. A placeholder for the argument we will passed to it. 
    setTimeout(function(){
        // return "I am the return value";// instead of returning the value we will pass it as an argument to the callback function
        cb("I am the returned value from the Set Timeout");
    }, 1000)
}

//When it is time to execute the function we pass it the needed function to execute
//similar to what we were seing with the callback function we handed to the forEach method

//the function argument can be "anonymous"
myTimeOutWithCallBack(function(elm){
    console.log(elm);
})

//the function argument can be named
function namedFunction(elm){
    console.log(elm);
}

myTimeOutWithCallBack(namedFunction);


//===================================asynchronous JS Built in with Call Back FS===================================

// ^^^ the above example is us creating our own function that contains an asynchronous action 
// We can see pre-built methods that also make use of Callbacks to deal with asynchronous actions

//For example: 
//https://nodejs.org/dist/latest-v16.x/docs/api/fs.html#fswritefilefile-data-options-callback
function writingToFile(){
    fs.writeFile("exampleFile.txt", "Data to Write to File", function(err){
    //this is the callback function we give fs.writeFile to execute once the work is done
        if(err){
            return console.log(err);
        }
        console.log("Success - wrote to file");
    })
};
writingToFile()

// Questions: Where would we put an ReadFile? 
// Answer: We could place it below our fs.writeFile for example - below this line. 
// Question: Could that be problamatic? 
// Answer: Yes. The fs.readFile function could run and readfile before the writeFile methos has completed. 
// Question: what can we do to ensure that we only read from file after we write to file
// Answer: A call back that only gets executed once we have succesfully written to file

// Example: 

function writingToFileWithCallBack(cb){//when defining the function we set a function parameter to accept an argument. A placeholder for the argument we will passed to it.(){
    fs.writeFile("exampleFile.txt", "Data to Write to File", function(err){
    //this is the callback function to execute once the work is done
        if(err){
            return console.log(err);
        }
        console.log("Success - wrote to file");
        cb()
    })
};

function readingFromFile(){
    // https://nodejs.org/dist/latest-v16.x/docs/api/fs.html#fsreadfilepath-options-callback
    fs.readFile("exampleFile.txt", 'utf8', function(err, data){
        //this is the callback function we give fs.writeFile to execute once the work is done
        console.log("readFile Data: ", data);
    })
}

writingToFileWithCallBack(readingFromFile);


//===================================asynchronous JS Built in with Call Back Request===================================


// https://www.npmjs.com/package/request
function MovieAPICall(){
    request('https://www.omdbapi.com/?t=finding+nemo&y=2003&plot=full&apikey=trilogy', function (error, response, body) {
    console.error('error:', error); // Print the error if one occurred
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    console.log('body:', body); // Print the HTML for the Google homepage.
    }); 
}

//===================================asynchronous JS Built Promises===================================

//Promises were intened to be a Syntactic "Upgrade to Callbacks"
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises
//The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

//Essentially, a promise is a returned object to which you attach callbacks, instead of passing callbacks into a function.


// You can make your own Promises using a The Promise Constructor

//===================================asynchronous JS Built with Promise Constructor===================================

// add timeout example to line up with previous timeout example

function timeout(ms,...args) {
  return new Promise(function (resolve) {
    setTimeout(function () { resolve(...args) },ms);
  });
}

timeout(1000).then(() => {
  console.log("1 second!");
});

// OR

timeout(2000,"2 seconds!").then((arg) => {
  console.log(arg);
});



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
    console.log(err);//this line
  });

beHappy("Farley").then(function(data) {
    console.log(data);//this line
  })
  .catch(function(err) {
    console.log(err);
  });

//===================================synchronous JS Built with util.promisify===================================
//https://nodejs.org/dist/latest-v8.x/docs/api/util.html#util_util_promisify_original

function demo(arr, cb){
  //whatever the callback is it is an error first callback
  if(arr.length > 1){
    cb(null, arr[0]);
  }else{
    cb("Error", null);
  }
}

demo([],function(err, data){
  if (err){
    console.log(err);
    return err;
  }else 
    console.log(data);
    return data;
})

const demoPromisified = util.promisify(demo);

demoPromisified([]).then(function(data){
  console.log("demoPromisified Data", data);
}).catch(function(err){
  console.log("demoPromisified ",err);
}) 

demoPromisified([1,2]).then(function(data){
  console.log("demoPromisified Data", data);
}).catch(function(err){
  console.log("demoPromisified ",err);
}) 

//===================================asynchronous JS Built with util.promisify===================================
const readFromFile = util.promisify(fs.readFile);
const writeFromFile = util.promisify(fs.writeFile);

writeFromFile("exampleFile.txt", "Data to write to file").then(function(){
    console.log("The Promise is resolved - Wrote to File");
    readFromFile("exampleFile.txt", 'utf8').then(function(data){
        console.log("The Promise is resolved - Read from File: ", data)
    })
});

//OR we can write it like this: "Promise Chaining"

writeFromFile("exampleFile.txt", "Data to write to file").then(function(){
    console.log("The Promise is resolved - Wrote to File");
    
}).then(readFromFile("exampleFile.txt", 'utf8').then(function(data){
        console.log("The Promise is resolved - Read from File: ", data)
    }));

// What about return value handling in then methods?
Promise.resolve([]).then(function(arg) {
  // [].push("first resolve");
  arg.push("first resolve");
  // then() will return a promise that resolves to arg 
  return arg;
}).then(function(arg1) {//this is the return of the previous function (return arg;)
  // ["first resolve"].push(arg1)
  arg1.push("second resolve");
  // then() will return a promise that resolves to arg1
  return arg1;
}).then(function(arg2) { //this is the return of the previous function (return arg1;)
  // ["first resolve", "second resolve"].push(arg2)
  arg2.push("third resolve");
  // then() will return a promise that resolves to arg1
  return arg2;
}).then(function(arg3) { //this is the return of the previous function (return arg2;)
  // console.log(["first resolve", "second resolve", "third resolve"])
  console.log(arg3);
});

//===================================asynchronous JS with Built-In Promise===================================


// https://www.npmjs.com/package/request
function MovieAPICall(){
    axios.get('https://www.omdbapi.com/?t=finding+nemo&y=2003&plot=full&apikey=trilogy').then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
}


//===================================asynchronous JS Built async and await ===================================
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function

//A TRUE Syntatic Upgrade
//An async function is a function declared with the async keyword, and the await keyword is permitted within them. 
//The async and await keywords enable asynchronous, promise-based behavior to be written in a cleaner style, avoiding the need to explicitly configure promise chains.


function resolveAfter2Seconds() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('resolved');
    }, 2000);
  });
}

async function asyncCall() {
  console.log('calling');
  const result = await resolveAfter2Seconds();
  console.log(result);
  // expected output: "resolved"
}

asyncCall();


//===================================async and await AND try...catch===================================



async function waitForIt (){
    let err = await writeFromFile("exampleFile.txt", "Data to write to file");
    let readData = await readFromFile("exampleFile.txt", 'utf8');
    let movieData = await axios.get('https://www.omdbapi.com/?t=finding+nemo&y=2003&plot=full&apikey=trilogy');
};

//Question: What is there is an error? How do we deal with error handeling with async and await?
//Answer: try Catch
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch
//The try...catch statement marks a block of statements to try and specifies a response should an exception be thrown.
async function waitForIt (){
    try {
        //The statements to be executed.
        //Catch: tatement that is executed if an exception is thrown in the try-block.
        let err = await writeFromFile("exampleFile.txt", "Data to write to file");
        let readData = await readFromFile("exampleFile.txt", 'utf8');
        let movieData = await axios.get('https://www.omdbapi.com/?t=finding+nemo&y=2003&plot=full&apikey=trilogy');
  
    } catch (error) {
      console.error("One of the calls failed");
   
    }
    
};





