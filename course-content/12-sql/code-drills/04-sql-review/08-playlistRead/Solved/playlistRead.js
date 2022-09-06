var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "password",
  database: "playlistDB"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
  // afterConnection()
  // queryAllSongs();
  // queryDanceSongs();
  // queryDanceSongsParams("Dance");
  // queryDanceSongs("Dance; DROP table songs");
  queryDanceSongsSafe()
    // connection.end();
});



function afterConnection() {
  connection.query("SELECT * FROM songs", function(err, res) {
  // connection.query("SELECT artist FROM songs", function(err, res) {
    if (err) throw err;
    console.log(res);
    connection.end();
  });
}


function queryAllSongs() {
  console.log("****queryAllSongs****");
  connection.query("SELECT * FROM songs", function(err, res) {
    for (var i = 0; i < res.length; i++) {
      console.log(res[i].id + " | " + res[i].title + " | " + res[i].artist + " | " + res[i].genre);
    }
    console.log("-----------------------------------");
  });
};



function queryDanceSongs() {
  console.log("****queryDanceSongs****");
  var query = connection.query("SELECT * FROM songs WHERE genre='Dance';", function(err, res) {
  console.log(res);
    for (var i = 0; i < res.length; i++) {
      console.log(res[i].id + " | " + res[i].title + " | " + res[i].artist + " | " + res[i].genre);
    }
  });
};

function queryDanceSongsParams(genre) {
  console.log("****queryDanceSongsParams(genre)****");
  var query = connection.query("SELECT * FROM songs WHERE genre='" + genre + "';", function(err, res) {
    for (var i = 0; i < res.length; i++) {
      console.log(res[i].id + " | " + res[i].title + " | " + res[i].artist + " | " + res[i].genre);
    }
})};


//===================================================================


function queryDanceSongsSafe(genre) {
  console.log("****queryDanceSongsSafe****");
  var query = connection.query("SELECT * FROM songs WHERE genre=?", [genre], function(err, res) {
    for (var i = 0; i < res.length; i++) {
      console.log(res[i].id + " | " + res[i].title + " | " + res[i].artist + " | " + res[i].genre);
    }
  });

  // logs the actual query being run
  // console.log("******");
  // console.log(query.sql);
  // console.log("******");
}
