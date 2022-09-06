// https://docs.github.com/en/rest/repos/repos#list-organization-repositories
var requestUrl = 'https://api.github.com/orgs/Netflix/repos';

// JQuery AJAX
//jQuery uses .ajax to send the request to the API. On completion, the response is returned, as shown in the following example:
//AJAX and fetch() are structured similarly but do not function exactly the same. fetch() would try to resolve the response with a 404 or 500 error, while AJAX would not, as shown in the following example:
$.ajax({
  url: requestUrl,
  method: 'GET',
}).then(function (response) {
  console.log('AJAX Response \n-------------');
  console.log(response);
  for (var i = response.length - 1; i >= 0; i--) {
      console.log(response[i].name);
    }
  console.log("********");
});


console.log("meow");//what happens here? 

// Browser Fetch Method
fetch(requestUrl)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log('Fetch Response \n-------------');
    console.log(data);
    for (var i = 0; i < data.length; i++) {
      console.log(data[i].name);
    }
    console.log("********");
  });

// Browser XMLHttpRequest


var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
  //With XHR, we first check whether xhr.readyState equals XMLHttpRequest.DONE, as follows:
  if (xhr.readyState === XMLHttpRequest.DONE) {
    //When the preceding condition is met, we log the XHR response, as shown in the following example:
    console.log('XMLHttpRequest Response \n-------------');
    // console.log(xhr.response);
    console.log(JSON.parse(xhr.response));//string
    var responseArr = JSON.parse(xhr.response)
    for (var i = 0; i < responseArr.length; i++) {
      console.log(responseArr[i].name);
    }
    console.log("********");
  }
};
//XHR initializes the API call with .open and sends the request with .send, like in the following code:
xhr.open('GET', requestUrl);
xhr.send();
