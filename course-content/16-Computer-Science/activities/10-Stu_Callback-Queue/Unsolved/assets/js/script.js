// function to block the stack for x number of milliseconds
// Uses a while loop to create a blocking process that makes the page unresponsive and slow to load. 
// You may need to refresh their browsers demonstrate the blocking effect. 
// The activity's objective is to delay the blocking process in order to allow the page to render quickly, thus improving the UX and webpage performance.
const pause = milliSeconds => {
  // get the current time
  var startTime = new Date().getTime(); 
  // block stack until time's up
  while (new Date().getTime() < startTime + milliSeconds); 
}

pause(8000);
