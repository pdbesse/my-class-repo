// Lists all users, in the order that they signed up on GitHub. This list includes personal user accounts and organization accounts
// https://docs.github.com/en/rest/users/users#list-users
var requestUrl = 'https://api.github.com/users';

// Browser XMLHttpRequest, built in the browser and require more code.
// An XMLHttpRequest, or XHR for short, was the predecessor to fetch(). XHR requests involve much more code than a simple fetch(), as shown in the following code:
// https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest
// Despite its name, XMLHttpRequest can be used to retrieve any type of data, not just XML.
// The constructor initializes an XMLHttpRequest. It must be called before any other method calls.
var xhr = new XMLHttpRequest();

// https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/readystatechange_event
// Fired whenever the readyState property changes. Also available via the onreadystatechange event handler property.
// The XMLHttpRequest.readyState property returns the state an XMLHttpRequest client is in.
// UNSENT (Client has been created. open() not called yet.), OPENED (open() has been called.), HEADERS_RECEIVED (send() has been called, and headers and status are available.), LOADING (Downloading; responseText holds partial data.), DONE (The operation is complete.)
xhr.onreadystatechange = function () {//An event handler that is called whenever the readyState attribute changes.
  if (xhr.readyState === XMLHttpRequest.DONE) { //https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/onreadystatechange
    console.log('XMLHttpRequest Response \n-------------');
    console.log(xhr.response);
    console.log("typeof", typeof xhr.response)
  
    console.log(JSON.parse(xhr.response));
    console.log('-------------');
  }
};
// Initializes a request.
// https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/open
// open(method, url)
xhr.open('GET', requestUrl);//Initializes a request.

// https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/send
// The XMLHttpRequest method send() sends the request to the server.
xhr.send();//Sends the request. If the request is asynchronous (which is the default), this method returns as soon as the request is sent.

// AJAX call requires a third party library, jQuery
//AJAX is another alternative to the Fetch API. AJAX requests require the use of the third-party library jQuery to work, as shown in the following example:
$.ajax({
  url: requestUrl,
  method: 'GET',
}).then(function (response) {
  console.log('Ajax Reponse \n-------------');
  console.log(response);
  
});

// console.log(response);



