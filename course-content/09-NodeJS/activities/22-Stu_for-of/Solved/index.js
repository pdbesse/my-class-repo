//for..of is a method, introduced in ES2015, for iterating over "iterable collections".
//Finally, another really useful case for for..of is in iterating of NodeLists. 
//When we query the document for a group of elements, what we get returned is a NodeList, 
//not an Array. 

// another option
const songs = document.querySelectorAll("ul > li");
console.log("Song li", songs);
for (const song of songs) { //Nodelist
  song.classList.add("green");
}

// another option
// const songs = document.querySelectorAll("ul > li");
// for(var i = 0; i < songs.length; i ++){
//  songs[i].classList.add("green");
// }


// another option
// const songs = document.querySelectorAll("ul > li");
// console.log(songs);
// songs.forEach(function(song){
//  song.classList.add("green");
// })



// another option
// const songsDiv = document.querySelectorAll("#songs");
// console.log(typeof songsDiv);
// songsDiv[0].classList.add("green");

// another option
const songsDiv = document.querySelector("#songs");
// console.log(songsDiv);
// songsDiv.classList.add("green");


// another option
// const songsDiv = document.querySelectorAll("#songs");
// console.log("songsDiv", songsDiv)
// for (const song of songsDiv) { // map obj
//   song.classList.add("green");
// }

