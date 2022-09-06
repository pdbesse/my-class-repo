console.log("Document Body: ")
console.log(document.body);

console.log("Children of Document Body: ")
console.log(document.body.children);

console.log("Second child of body: ")
console.log(document.body.children[1]);

console.log("First child of the ul: ")
//DOM traversal allows us to access the DOM using parent-child relationships, as shown in the following example:
console.log(document.body.children[1].children[0]);

// Accessing element by id
//We can also access an element directly by targeting the id of the element using the method getElementbyId(), like in the following example:
var firstChildUl = document.getElementById("first-child-ul");
console.log(firstChildUl);
// var firstChildUl = document.body.children[1].children[0].style.color = "#e97451";
// document.body.children[1].children[0].style.color = "#e97451";


var secondChildUl = document.body.children[1].children[1]

// Setting style of element
//We can set and change a selected element's style by accessing an element's style object and its properties and assigning a value, like in the following example:
firstChildUl.style.color = "#e97451";
secondChildUl.style.fontSize = "200px";
