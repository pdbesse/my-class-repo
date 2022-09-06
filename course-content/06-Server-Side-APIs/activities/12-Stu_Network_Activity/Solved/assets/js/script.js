requestUrl = 'https://api.github.com/orgs/nodejs/repos';

fetch(requestUrl)
  // https://developer.mozilla.org/en-US/docs/Web/API/Request/cache 
  .then(function (response) {
    console.log(response);
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });
