var repoNameEl = document.querySelector('#repo-name');
var issueContainerEl = document.querySelector('#issues-container');
var limitWarningEl = document.querySelector('#limit-warning');

var getRepoName = function () {
  // This is coming from the URL search bar in the browser. It is what comes after the `?`.
  //We retrieve the repository name from the URL in getRepoName() so that we can use it in a fetch() request, as shown in the following code:
  var queryString = document.location.search;
  var repoName = queryString.split('=')[1];

  if (repoName) {
    repoNameEl.textContent = repoName;

    getRepoIssues(repoName);
  } else {
    // This will run and return to the homepage if there was nothing in the URL query parameter.
    //If there is no repo name in the URL, then let's send the user back to the homepage, as follows:
    document.location.replace('./index.html');
  }
};

var getRepoIssues = function (repo) {
  var apiUrl = 'https://api.github.com/repos/' + repo + '/issues?direction=asc';

  fetch(apiUrl).then(function (response) {
    if (response.ok) {
      response.json().then(function (data) {
        displayIssues(data);

        // Since GitHub only returns 30 results at a time, we check to see if there's more than 30 by looking for a next page URL in the response headers.
        // As shown in the following example, GitHub alerts us with a Link property in the response header that gives us the next query URL, in case we want to display the next 30 issues:
        // https://developer.mozilla.org/en-US/docs/Web/API/Headers/get
        // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers
        // https://docs.github.com/en/rest/reference/repos#list-public-repositories
        console.log("response.headers",response.headers);
        console.log(response.headers.get('Link'));
        if (response.headers.get('Link')) {//rel="next, rel="last"
          displayWarning(repo);
        }
      });
    } else {
      document.location.replace('./index.html');
    }
  });
};

var displayIssues = function (issues) {
  // This will check for strict equality. Using `!issues.length` works, but only because JavaScript considers `0` to be `falsy`.
  //If we search a repository that has no issues, instead of displaying a blank screen, we should let users know with the following code in displayIssues():
  if (issues.length === 0) {
    issueContainerEl.textContent = 'This repo has no open issues!';
    return;
  }

  for (var i = 0; i < issues.length; i++) {
    var issueEl = document.createElement('a');
    issueEl.classList = 'list-item flex-row justify-space-between align-center';
    issueEl.setAttribute('href', issues[i].html_url);
    issueEl.setAttribute('target', '_blank');

    var titleEl = document.createElement('span');
    titleEl.textContent = issues[i].title;
    issueEl.appendChild(titleEl);

    var typeEl = document.createElement('span');

    // If there's already a pull request open, it's a good idea we focus on other open issues that no one has worked on.
    if (issues[i].pull_request) {
      typeEl.textContent = '(Pull request)';
    } else {
      typeEl.textContent = '(Issue)';
    }

    issueEl.appendChild(typeEl);

    issueContainerEl.appendChild(issueEl);
  }
};

// When there are more issues than what GitHub has returned, we let the user know by printing a message with a link to the page.
var displayWarning = function (repo) {
  limitWarningEl.textContent = 'To see more than 30 issues, visit ';

  var linkEl = document.createElement('a');
  linkEl.textContent = 'GitHub.com';
  linkEl.setAttribute('href', 'https://github.com/' + repo + '/issues');
  linkEl.setAttribute('target', '_blank');

  // This will appear on the bottom of the page.
  limitWarningEl.appendChild(linkEl);
};

getRepoName();
