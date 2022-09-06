var counter = document.querySelector("#counter");
var addButton = document.querySelector("#add");
var subtractButton = document.querySelector("#subtract");

//o retrieve the count, we use the getItem() method. This will get the value saved in storage and save it to the variable count.
var count = localStorage.getItem("count");
// var count = parseInt(localStorage.getItem("count"));
console.log("Hello count", typeof count)

if(count !== null){
  //We render the retrieved count in HTML using the textContent property,
  console.log(count, typeof count)
  counter.textContent = count;
}else {
  console.log(count)//null

  //We render 0 in HTML using the textContent property,
  count = 0;
  localStorage.setItem("count", count);
  counter.textContent = count;
}


addButton.addEventListener("click", function() {
  if (count < 24) {
    //The unary plus operator converts its operand to Number type.
    // count = parseInt(count);//"12" => 12
    count++;
    counter.textContent = count;
    //When we click on a button, we add the number of clicks to storage using the window's localStorage property and add a key-value pair to storage using the method setItem():
    console.log(count, typeof count)
    localStorage.setItem("count", count);
  }
});

subtractButton.addEventListener("click", function() {
  if (count > 0) {
    //The unary negation operator converts its operand to Number type and then negates it.
    count--;
    counter.textContent = count;
    console.log(count, typeof count)
    localStorage.setItem("count", count);
  }
});
