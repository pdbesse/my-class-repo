//notes: https://docs.github.com/en/rest/reference/repos#list-organization-repositories
var tableBody = document.getElementById('repo-table');
var fetchButton = document.getElementById('fetch-button');

function getApi() {
  // fetch request gets a list of all the repos for the node.js organization
  // We set the request URL to a variable. This is the URL that the fetch() method will use to request data. The path we are making a request to here is /orgs/nodejs/repos, as shown in the following code:
  // https://docs.github.com/en/rest/repos/repos#list-organization-repositories
  var requestUrl = 'https://api.github.com/orgs/nodejs/repos';

  //We pass the requestUrl variable as an argument to the fetch() method, as shown in the following example:
  fetch(requestUrl)
    //We then convert the response into JSON and return the formatted response, as follows:
    .then(function (response) {
      console.log("response", response)
      //The simplest use of fetch() takes one argument — the path to the resource you want to fetch — and returns a promise containing the response (a Response object). 
      //This is just an HTTP response, not the actual JSON. To extract the JSON body content from the response, we use the json() method
      //JSON stands for JavaScript Object Notation. It is nothing more than the use of simple JavaScript objects to exchange data between the client and server. This makes the data easier to read and understand.
      //Takes a Response stream and reads it to completion. It returns a promise that resolves with the result of parsing the body text as JSON, which is a JavaScript value of datatype object, string, etc.
      //Note that despite the method being named json(), the result is not JSON but is instead the result of taking JSON as input and parsing it to produce a JavaScript object.
      return response.json();
    })
    .then(function (data) {
      console.log("data",data)
      //Loop over the data to generate a table, each table row will have a link to the repo url
      for (var i = 0; i < data.length; i++) {
        // Creating elements, tablerow, tabledata, and anchor
        var createTableRow = document.createElement('tr');
        var tableData = document.createElement('td');
        var link = document.createElement('a');

        // Setting the text of link and the href of the link
        console.log(data[i].html_url);
        link.textContent = data[i].html_url;
        link.href = data[i].html_url;

        // Appending the link to the tabledata and then appending the tabledata to the tablerow
        // The tablerow then gets appended to the tablebody
        tableData.appendChild(link);
        createTableRow.appendChild(tableData);
        tableBody.appendChild(createTableRow);
      }
    });
    console.log("Meow");
}

fetchButton.addEventListener('click', getApi);
