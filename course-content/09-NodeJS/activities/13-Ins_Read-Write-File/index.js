
// fs is a Node standard library package for reading and writing files
// When we installed Node.js, we also installed its standard library. 
// The standard library includes dozens of modules that extend the basic functionality of Node.

// 🔑 In order to use a modules, we need to import it into our application using require:
// We import the fs, or file system module using require and store it in a variable, fs.
// The convention is to name variables after the module.

// ☝️ Why do you think we need to import modules if they are built-in to Node to begin with?

// 🙋 We import modules into our application so that we are only loading exactly what we need. 
// This will speed up the performance of our applications.
const fs = require("fs");

// return the contents of 'data.csv' as a string in the variable "data"
// "utf8" encodes the raw buffer data in human-readable format
// 🙋 This application will read a file, data.csv, and will log the results stored in a variable, data.

// 🔑 The fs method readFile accepts three arguments: 
//1. the file we want to read
// 2. the encoding format we want to use to read the file, 
// and, 3. a callback.
//https://nodejs.org/dist/latest-v14.x/docs/api/fs.html#fs_fs_readfile_path_options_callback
fs.readFile('data.csv', 'utf8', (error, data) => {

  error ? console.error(error) : console.log(data)
  
  const dataArr = data.split(',');
  // ["10",123,76,5003,9,0.127,40,-1,2^4]
  // console.log(dataArr);
  for(let i = 0; i < dataArr.length; i++){
  	console.log(dataArr[i]);
  }
}
);

fs.readFile("data.csv", "utf8", function(error, data) {

  if (error) {
    return console.log(error);
  }

  console.log(data);

});

//Uncomment this next function to write to the file with anything you pass in as process.argv[2]
//https://nodejs.org/dist/latest-v14.x/docs/api/fs.html#fs_fs_writefile_file_data_options_callback
fs.writeFile('log.txt', process.argv[2], (err) =>
  err ? console.error(err) : console.log('Success!')
);



// console.log vs. console.error // no presentational difference in Node

console.error("err");
console.log("log");
