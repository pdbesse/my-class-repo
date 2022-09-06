// Use Moment.js to format the following variables:
// 1. What is today's date in the following format: Jan 1st, 1999?
//First we need to create a Moment object for today. We will use this in all of the answers. We can do so with the following code:
//https://momentjs.com/docs/#/parsing/
//https://momentjs.com/docs/
var today = moment();
console.log("today", today);//_isAMomentObject: true

//For the answer to the first question, we format the moment object today to use MM Do, YYYY format:

// MMM Month (Apr)
// MMMM April
//Do Day 1st
// YYYY Year 2022
//YY 22
$("#1a").text(today.format("MMM Do, YYYY"));//2022


// 2. What is the day of the week today?
//For the second question, we format today to say which day of the week it is using dddd:
//Day of Week 
var dayWeek = today.format("[Today is] dddd")
//Escaping characters
//To escape characters in format strings, you can wrap the characters in square brackets.
//moment().format('[today] dddd'); // 'today Sunday'
$("#2a").text(dayWeek);//Today is Monday

// 3. Parse the following date, 11/3/2020, and convert it into the following format: Sunday, February 14th 2010, 3:25:50 pm.
//For the third question, we parse the 11/3/2020 and reformat it into dddd, MMMM Do YYYY, h:mm:ss a format:
var reformatDate = moment("11/3/20", "MM-DD-YY").format("dddd, MMMM Do YYYY, h:mm:ss a");
$("#3a").text(reformatDate);//Tuesday, November 3rd 2020, 12:00:00 am

// 4. I need to place my recycling bin on the curb on every odd week of the year for collection. Do I need to put out my recycling bin out this week?
//Lastly, we determine what week of the year we fall on right now, and use a if/else statement to determine if it is odd or even. Then we print to the screen a boolean along with the current week number:
//Locale week of year
// https://momentjs.com/docs/#/parsing/string-format/
var weekNum = today.format("w");
var takeOut;
// Check odd, then assign boolean
if(weekNum % 2) {
  takeOut = true;
} else {
  takeOut = false;
}



$("#4a").text(takeOut + ", because it's currently week " + weekNum);




