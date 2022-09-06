//We pass through the cache: reload option using the init object.
//The browser fetches the resource from the remote server without first looking in the cache, but then it will update the cache with the downloaded resource—as shown in the following example:
fetch('https://api.github.com/repos/nodejs/node/issues?per_page=5', {
  // The browser fetches the resource from the remote server without first looking in the cache.
  // The browser will then update the cache with the downloaded resource.
  // https://developer.mozilla.org/en-US/docs/Web/API/Request/cache
  cache: 'reload'
})
  .then(function (response) {
  	//We write the remainder of the fetch() request, as follows:
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });
