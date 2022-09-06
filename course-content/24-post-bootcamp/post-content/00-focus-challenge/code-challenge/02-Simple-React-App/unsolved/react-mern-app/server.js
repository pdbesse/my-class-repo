// Require express
var express = require("express");
var app = express();
var cors = require('cors')

var exphbs = require("express-handlebars");
// require("dotenv").config();
// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 8080;

app.use(express.static("public"));

// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

// app.use((req, res, next) => {
//   res.header('Access-Control-Allow-Origin', '*',
//   "Access-Control-Expose-Headers", "Access-Control-*",
//   "Access-Control-Allow-Headers", "Access-Control-*, Origin, X-Requested-With, Content-Type, Accept",
//   'Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS, HEAD',
//   'Allow', 'GET, POST, PUT, DELETE, OPTIONS, HEAD'
//   );
//   next();
// });

// Handlebars engine
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Routes
require("./routes/api-routes.js")(app);

// Requiring our models for syncing
var db = require("./models");

// Syncing our sequelize models and then starting our Express app
db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});

