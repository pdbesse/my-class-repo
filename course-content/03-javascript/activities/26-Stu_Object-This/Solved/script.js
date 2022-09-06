// This refers to the window
//When we log the keyword this alone—like in the following example—the global object, or window, is logged:
var thing = "meow";
console.log(this);

// This refers to the window object
//When we use this inside a function, this refers to the global object, as follows:
function helloThis() { 
   console.log("Inside this function, this is ", this); 
}

helloThis(); 

// This refers to the child object. Will console log 20
//When we use this inside an object, this is local and belongs to that object, as shown in the following example:
var child = { 
   age: 10,
   ageTenYears: function() {
       console.log(this.age + 10); 
   }
};

//=========

var arrPeople = [{ 
   age: 3,
   ageTenYears: function() {
       // console.log(child.age + 10); //20
       console.log(this.age + 10); //13
   }
},{ 
   age: 15,
   ageTenYears: function() {
       console.log(this.age + 10); 
   }
},
{ 
   age: 11,
   ageTenYears: function() {
       console.log(this.age + 10); 
   }
}]


arrPeople[0].ageTenYears();

console.log(arrPeople[0].age);//13

// This refers to the investment object. Will log 5750
//When we use this in a nested object, this refers to the object where it is used even if it is inside another object, like in the following example:
var investor = {  
  name: "Cash Saver",
  investment: {
    initialInvestment: 5000,
    investmentGrowth: function() {
      console.log(this.initialInvestment * 1.15);
      console.log(this);
    }
   } 
};

// Call the function helloThis to check results
helloThis();

// Call the object methods to check results
//When we call an object's method, this still refers to the object the method belongs to—even when it is called outside the object, like in the following code:
child.ageTenYears();
investor.investment.investmentGrowth();
