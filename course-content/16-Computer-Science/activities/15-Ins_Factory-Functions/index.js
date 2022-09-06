// Create a function which accepts three arguments name, age, and city.
// We will be creating an object with a function instead of a class.
function createUser(name, age, city) {
    // Create an user object and map the function arguements to a key in the object.
    const user = {
        name: name,
        age: age,
        city: city
    }
    // const self = this;// LOL
    // console.log(self); Node Global
    // Return two inner functions.
    return {
        introduceSelf: function() {

            // Instead of using the `this` keyword, we use the object we created in the outer function's scope.
            return console.log(`Hi my name is ${user.name} and I am currently ${user.age} years old!`)
        },
        setAge: function(age) {
            user.age = age
        },

        location: function() {
            return console.log(`${user.name} is located in ${user.city}`)
        },
        setName: function(name) {
            user.name = name;
            this.location();
            console.log(this);
            // {
            //     introduceSelf: [Function: introduceSelf],
            //     location: [Function: location],
            //     setName: [Function: setName]
            // }
            this.introduceSelf();
        }
    }
}

// Create a user without using the `new` keyword different from how we do it with classes.
const userOne = createUser('Beverly', 58, 'Phoenix')
const userTwo = createUser('Farley', 5, 'Under The House')

// Call the two methods attached to our `createUser` function to see if the user object is logging the correct values.
userOne.introduceSelf();
userOne.location();
userOne.setAge(4);
userOne.setName("Asher");

console.log(userOne);

