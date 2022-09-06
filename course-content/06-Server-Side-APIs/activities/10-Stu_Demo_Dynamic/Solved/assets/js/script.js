// We use document.getElementById to target the users <div>and the fetch-button <div>. We save them to the variables usersContainer and fetchButton respectively
var usersContainer = document.getElementById('users');
var fetchButton = document.getElementById('fetch-button');

function getApi() {
  var requestUrl = 'https://api.github.com/users?per_page=5';
  //We use fetch() to make a request to receive some data. We are sure to convert it to JSON so that it can be more easily consumed
  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      //Using console.log to examine the data
      console.log(data);
      //We use a for loop to iterate through the response data
      for (var i = 0; i < data.length; i++) {
        //Creating a h3 element and a p element
        // On each iteration, we create an H3 and p tag
        var userName = document.createElement('h3');
        var userUrl = document.createElement('p');
        var linkTag = document.createElement('a');

        //Setting the text of the h3 element and p element.
        //We take the .login and .url properties off of the current iteration of the data array, making those the textContent of the userName and userUrl tags we created
        
        userUrl.textContent = data[i].url;

        //Appending the dynamically generated html to the div associated with the id="users"
        //Append will attach the element as the bottom most child.
        // We finally append the created elements with their newly added text content to the <div>
        
        //Bonus: Make some links to Profile 
        userName.textContent = data[i].login;
        linkTag.setAttribute("href", data[i].html_url)
        linkTag.textContent = data[i].url;  

        usersContainer.append(userName);
        usersContainer.append(userUrl);
        usersContainer.append(linkTag);
      }
    });
}
fetchButton.addEventListener('click', getApi);
