const termEl = document.getElementById('terms');
const termButton = document.getElementById('term-btn');

// function getTerms() {
//   fetch('/api/terms')
//     .then(function (response) {
//       console.log(response);
//       // we return response.json()
//       return response.json();
//   }).then(function(json){
//     // console.log(json);
//     // return json;
//     json.forEach((item) => renderTerm(item)
//   });
// }

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/async_function
const getTerms = async () => {
  const result = await fetch('/api/terms', {
    method: 'GET',
  });
  const json = await result.json();
  // console.log(json);
  return json;
};



const renderTerm = (term) => {
  const cardEl = document.createElement('div');
  const cardBodyEl = document.createElement('div');
  const cardBodyTitle = document.createElement('div');

  cardEl.classList.add('card', 'p-5');
  cardBodyEl.classList.add('card-body', 'p-5');
  cardBodyTitle.classList.add('card-header', 'card-title', 'link');

  cardBodyTitle.innerHTML = `<a href=${term.url}>${term.term}</a>`;
  cardBodyEl.innerText = term.definition;
  termEl.appendChild(cardBodyTitle);
  termEl.appendChild(cardBodyEl);
};

const buttonHandler = () =>
  getTerms().then((response) => response.forEach((item) => renderTerm(item)));

termButton.addEventListener('click', buttonHandler);
