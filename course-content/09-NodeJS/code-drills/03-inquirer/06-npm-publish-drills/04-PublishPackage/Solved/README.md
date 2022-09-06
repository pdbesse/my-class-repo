<!-- Simple README Example -->

# @yourusername/google

A minimalistic searching function


## Installation

`$ npm install @yourusername/google` 


 ## Example:

```js
    var google = require('@yourusername/google');

    var avengersSearch = google.search(["captain america", "thor", "black widow", "captain america", "captain america", "iron man", "quicksilver", "spiderman", "starlord", "captain america", "ant man", "dr. strange", "thanos", "captain marvel", "gamora", "hulk", "nebula", "hawkeye", "vision", "scarlet witch"], "captain america"));

    // { positions: [ 0, 3, 4, 9 ], count: 4, time: '0.13' }

    console.log(`Your search took ${avengersSearch.time}s long to execute.`)
    // Your search took 0.13s long to execute.
