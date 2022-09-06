// music should be an object with title, artist, and album properties
const music = {
  title: "Trem Fantasma",
  artist: "Os Mutantes",
  album: "Os Mutantes, Self Titled"
};

// Inside of the backticks we use ${} to get access to the data inside of our object.
const songSnippet = `${music.title} 
by '${music.artist}' 
from the \`\ (escaped) "album" ${music.album} 
is currently playing (Spaces Matter)`;

console.log(songSnippet)

