const axios = require("axios");

axios
  .get("https://www.omdbapi.com/?t=The%20Matrix&apikey=trilogy")
  .then(function(data) {
    console.log(data.data);
  });
