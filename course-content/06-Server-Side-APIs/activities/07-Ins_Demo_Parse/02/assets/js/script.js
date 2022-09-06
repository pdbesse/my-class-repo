fetch('https://api.github.com/orgs/twitter/public_members')
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log('Twitter Public Members: Raw data \n----------');
    //We need to examine the API response to know how to access the data we want to extract.
    console.log(data);
  });

fetch('https://api.github.com/orgs/twitter/repos')
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log('Twitter Repositories: Names only \n----------');
    console.log(data);
    //The response we receive is an array, meaning that we can loop through the data, accessing whatever specific data we want, as shown in the following code:
    for (var i = 0; i < data.length; i++) {
      console.log("********")
      console.log("Id", data[i].id);
      console.log("Name", data[i].name);
    }
  });
