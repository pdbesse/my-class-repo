// Access multiple elements using .querySelectorAll()
//We select all the <p> and <div> elements using the querySelectorAll() method and store the lists in variables, as follows:
 var divTags = document.querySelectorAll("div");
 var pTags = document.querySelectorAll("p");
 var imgEl = document.querySelectorAll("img");

// Access element by ID using .querySelector()
//We access the first element of a selector using querySelector(). This method returns a single element. See the following code for an example:
 var changeP = document.querySelector("#change2");

// Sets first pTags to have a font-size of 40px
//We can also use setAttribute() to set the style of the image, as follows:
 pTags[0].setAttribute("style", "font-size: 40px;");

// Sets changeP to have multiple style attributes
//
 changeP.setAttribute("style", "font-size: 25px; font-weight: bold; text-decoration:underline; ");

 // Sets image source of the first image
 //We use setAttribute() to set an image's source. The method takes two parameters. The first parameter names the attribute we want to change, and the second is the value we want to assign to the attribute, as shown in the following example:
 imgEl[0].setAttribute("src", "./assets/images/image_1.png");

// Adds size and width styling to image
 imgEl[0].setAttribute("style", "width:50%");

// Loops through divTags to set each one to have the color blue and the font size of 30px
//We iterate over a list of elements to apply the styling changes to all the elements in the list
for (var i = 0; i < divTags.length; i++) {
  divTags[i].setAttribute("style", "color:blue; font-size: 30px");
 }