fetch(
  // Explain each parameter in comments below.
  //We attached multiple parameters after ? in the URL, as follows:
  //We limit the results to 10 per page, as shown in the following code:
  // per_page  integer query Results per page (max 100).
  //We chain multiple parameters using the & symbol. The first chained parameter is state, setting the value to open—which will show us only open issues—as follows:
  //state string  query Indicates the state of the issues to return. Can be either open, closed, or all.
  //We sort them by their creation date, as shown in the following code:
  //sort  string  query  What to sort results by. Can be either created, updated, comments.
  //We then pass a parameter to display them in descending order, as follows:
  //direction string  query One of asc (ascending) or desc (descending).
  // https://docs.github.com/en/rest/reference/issues#list-repository-issues
  'https://api.github.com/repos/nodejs/node/issues?per_page=10&state=open&sort=created&direction=desc'
)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });
// Parameter explanation.
// The per_page parameter will limit the results base per page.
// The state parameter represents the current state of the issue. It can be open, closed, or all.
// Sort will order the results based on the parameter given, the date created, updated, or comments.
// Direction will determine the order of the sort.
