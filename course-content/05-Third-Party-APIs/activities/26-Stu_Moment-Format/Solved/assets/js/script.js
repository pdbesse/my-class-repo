// Use Moment.js to format the following variables:
// TODO: 1. What is your graduation date in the following format: Jan 1st, 1999?
//The first two questions require us to format a given date. We parse the date that needs to be reformatted and then specify how we want to display the date. We could've used any date for the graduation date. 
// var today = moment();
// var today = moment("2021-12-07");
// today.format("MMM Do, YYYY")

var gradDate = moment("9/7/2022").format("MMM Do, YYYY");
$("#1a").text(gradDate);
// bonus: 
$("#1a").append("<br/>Days Remaining: " + moment("9/7/2022", 'MM/DD/YYYY').diff(moment(), 'days'))

// TODO: 2. What day of the week was 1/1/2022?
//The next questions require us to format the current date and time. We use moment() for the current date and time, then specify how we want to display it:
var weekDay = moment("1-1-2022", "M-D-YYYY").format("ddd MMM Do, YYYY");
$("#2a").text(weekDay);

// TODO: 3. Out of 365, what day of the year is today?
// DDDD	1..365	Day of year
var dayYear = moment().format("DDD");
$("#3a").text(dayYear);

// TODO: 4. What is the current time in the format: hours:minutes:seconds
var time = moment().format("hh:mm:ss");
$("#4a").text(time);

// TODO: 5. What is the current Unix timestamp?
//Unix time is a system for describing a point in time. 
//It is the number of seconds that have elapsed since the Unix epoch, 
//minus leap seconds; the Unix epoch is 00:00:00 UTC on 1 January 1970;
var unix = moment().format("X");
$("#5a").text(unix);

// TODO: 6. Parse the following Unix timestamp, 1318781876, and convert into any time/date format.
//For the last question, we had to parse the Unix timestamp and convert it to date and time:
var unixFormat = moment.unix(1318781876).format("MMM Do, YYYY, hh:mm:ss");
$("#6a").text(unixFormat);