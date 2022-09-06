// fetch() options are passed through as an additional init object argument, like in the following example:
// fetch() options are optional. Their usage is dependent on the API's documentation or the application's requirements.
// https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch#sending_a_request_with_credentials_included
// https://developer.mozilla.org/en-US/docs/Web/API/Request/redirect
fetch('https://api.github.com/repos/nodejs/node/issues?per_page=5', {
  method: 'GET', //GET is the default.
  credentials: 'same-origin', // include, *same-origin, omit
  redirect: 'follow', // manual, *follow, error => follow: Automatically follow redirects. Unless otherwise stated the redirect mode is set to follow
})
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });
