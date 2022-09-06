//We attached multiple parameters after ? in the URL, as shown in the following example:
//Each parameter offers a specific filter. In the following example, since filters for a start-from date:
//We use the & symbol to chain the parameters together, like in the following example:
//While 30 is the default number of results returned, here we user the per_page filter to specify 100, as shown in the following code:
// var url = 'https://api.github.com/gists/public?since=2020-06-01&per_page=100&page=2';
// https://docs.github.com/en/rest/gists/gists#list-public-gists
fetch('https://api.github.com/gists/public?since=2020-06-01')
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });

