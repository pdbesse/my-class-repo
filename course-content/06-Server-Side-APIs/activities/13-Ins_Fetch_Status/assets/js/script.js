var requestUrl = 'https://api.github.com/orgs/nodejs/repos?per_page=5';
// var requestUrl = 'https://api.github.com/orgs/nodejs/repo?per_page=5';

var responseText = document.getElementById('response-text');

function getApi(requestUrl) {
  fetch(requestUrl)
    .then(function (response) {
      console.log(response);
      // We check whether the response.status equals 200, as follows:
      if (response.status === 200) {
      	//If it does, we assign the status code from response.status to the textContent
        responseText.textContent = response.status;
      }
      // we return response.json()
      return response.json();
  }).then(function(data){
    console.log(data);
  });
}

getApi(requestUrl);
