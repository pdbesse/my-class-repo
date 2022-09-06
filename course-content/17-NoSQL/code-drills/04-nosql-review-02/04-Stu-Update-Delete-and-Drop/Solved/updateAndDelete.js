// Updates, Deletes and Drops

// Instructions

// Go back to your classroom database.

db
use classroom


// 1. You've decided to take on a new hobby. Add Extreme Basketweaving to your array of hobbies.


db.students.update({name: "Alvin"}, {$push: {"hobbies":"Extreme Basketweaving"}})


// 2. While practicing for your Extreme Basketweaving Competition, you broke the computer of the person next to you. They're using a new Operating System now. Change their os field.


db.students.update({name: "Simon"}, {$set: {os:"Windows"}})

// db.students.update({name: "Simon"}, {$push: {os:"Windows"}})//"The field 'os' must be an array but is of type string in document
// db.students.update({name: "Simon"}, {$set: {os: []}})
// db.students.update({name: "Simon"}, {$push: {os:"Windows"}})

// 3. Another student in your row saw you break that computer and wisely decided to move. Remove them from your database.


db.students.remove({name: "Theodore"})


// 4. You are worried everyone else will leave and you'll have to sit all alone. You decide to bribe everyone who didn't leave with candy. Add a field of `gavecandy` with a value of false to everyone in the array so you can keep track.


db.students.update({}, {$set: {gavecandy:false}}, {multi:true})

db.students.updateMany({}, {$set: {gavecandy:true}} 


// 5. All this work made you hungry, so you bought yourself some candy. Change the value of `gavecandy` to `true` in your entry.


db.students.update({_id:ObjectId("5eb08641c223f064548da981")}, {$set: {gavecandy:true}})


db.students.insertMany([
  {name: 'Leonardo', row:1, os:'Mac', hobbies:['Coding', 'Sleeping', 'Karate'] },
  {name: 'Michelangelo', row:2, os:'Mac', hobbies:['Baseball', 'Basketball', 'Tai Chi'] },
  {name: 'Donatello', row:3, os:'Lin', hobbies:['Gaming', 'Reading', 'Gardening'] },
  {name: 'Raphael ', row:4, os:'Mac', hobbies:['Walking', 'Reading', 'Mountain Climbing'] },
  {name: 'Splinter', row:5, os:'Win', hobbies:['Coding', 'Karate', 'Scuba Diving'] }
]);

