const mysql = require('mysql2');

const db = mysql.createConnection(
  {
    host: 'localhost',
    // MySQL username,
    user: 'root',
    // MySQL password
    password: 'password',
    database: 'playlistDB'
  },
  console.log(`Connected to the courses_db database.`)
);

afterConnection();

function afterConnection(){
    console.log(`Connected to the courses_db database.`)
    // selectsimple();
    // queryAllSongs();
    // queryDanceSongs();
    // queryDanceSongsParams("Dance");
    // queryDanceSongsWhatIf("Dance; DROP table songs");
    queryDanceSongsSafe("Dance");
    
  }

//===================================================================

function selectsimple() {
  db.query("SELECT * FROM songs", function(err, res) {
  // db.query("SELECT artist FROM songs", function(err, res) {
    if (err) throw err;
    console.log(res);
  
  });
}

function queryAllSongs() {
  console.log("****queryAllSongs****");
  db.query("SELECT * FROM songs", function(err, res) {
    for (var i = 0; i < res.length; i++) {
      console.log(res[i].id + " | " + res[i].title + " | " + res[i].artist + " | " + res[i].genre);
    }
    console.log("-----------------------------------");
  });
};


function queryDanceSongs() {
  console.log("****queryDanceSongs****");
  db.query("SELECT * FROM songs WHERE genre='Dance';", function(err, res) {
  console.log(res);
    for (var i = 0; i < res.length; i++) {
      console.log(res[i].id + " | " + res[i].title + " | " + res[i].artist + " | " + res[i].genre);
    }
  });
};


function queryDanceSongsParams(genre) {
  console.log("****queryDanceSongsParams(genre)****");
  db.query("SELECT * FROM songs WHERE genre='" + genre + "';", function(err, res) {
    for (var i = 0; i < res.length; i++) {
      console.log(res[i].id + " | " + res[i].title + " | " + res[i].artist + " | " + res[i].genre);
    }
})};


//===================================================================
//===================================================================
//===================================================================

function queryDanceSongsSafe(genre) {
  console.log("****queryDanceSongsSafe****");
  db.query("SELECT * FROM songs WHERE genre=?", [genre], function(err, res) {
    for (var i = 0; i < res.length; i++) {
      console.log(res[i].id + " | " + res[i].title + " | " + res[i].artist + " | " + res[i].genre);
    }
  });
}

