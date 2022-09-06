// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDFHcOspPVbPl9ASzDhmkBmtVBrG7_TEyg",
  authDomain: "code-drills.firebaseapp.com",
  databaseURL: "https://code-drills.firebaseio.com",
  projectId: "code-drills",
  storageBucket: "code-drills.appspot.com",
  messagingSenderId: "857596890224",
  appId: "1:857596890224:web:d1b880c63a0e0e20f7b8b5"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var database = firebase.database();

// event listener for submit button
$(".submit").on("click", function (event) {
  // prevent form submit button from doing default things like sending information and refreshing the page
  event.preventDefault();

  // form input validation

  // first, we select the inputs we need to validate (passwords)
  var email = $("#email");
  var password = $("#password");

  // now we validate them

  // email field input validation
  if (email.val().length < 1) { // cannot be empty
    // change the email input's placeholder and set focus
    email.attr("placeholder", "This field cannot be empty!")
    email.focus();
  }

  // password field input validation
  else if (password.val().length < 6) { // cannot be less than 6 characters
    // change password input's placeholder and set focus
    password.attr("placeholder", "Password must be at least 6 characters!")
    password.focus();
  }

  // if all validations check out
  else {
    // use firebase to sign in
    firebase.auth().signInWithEmailAndPassword(email.val(), password.val())
      // after use is signed in
      .then(function (data) {
        // log out the returned data
        // console.log(data)

        // let's clear the input fields
        email.val("");
        password.val("");
        password.attr("placeholder", "");

        // then tell them
        alert("You have successfully signed in!")
      })
      // uh oh, something broke. let's tell them why
      .catch(function (error) {
        alert("Error: " + error.message)
      })
  }
})

// Event listener from Firebase that checks with user auth state changes
firebase.auth().onAuthStateChanged(function (user) {
  // if user is authed then...
  if (user) {
    // run the grantAccess function
    grantAccess();
  } else {
    // run the removeAccess function
    removeAccess();
  }
})

// function to manipulate dom after user is authenticated
function grantAccess() {
  // get currentUser information from firebase
  var user = firebase.auth().currentUser;
  // save that information to sessionStorage
  sessionStorage.setItem("user", JSON.stringify(user))

  // retrieve user info saved in database
  getUserInfo(user.uid)

  // manipulate the dom
  $("#signIn").addClass("d-none");
  $("#setProfile").removeClass("d-none");
}

// function to manipulate dom after user is no longer authenticated
function removeAccess() {
  // remove user from sessionStorage
  sessionStorage.removeItem("user");

  // manipulate the dom
  $("#setProfile").addClass("d-none");
  $("#signIn").removeClass("d-none");
}

// Event listener for Sign Out button
$(".signout").on("click", function (event) {
  event.preventDefault();

  // sign out of firebase
  firebase.auth().signOut();
})

// Event listener for Save Button
$(".save").on("click", function (event) {
  event.preventDefault();
  // retrieve input field values
  var username = $("#name").val().trim();
  var favoriteFood = $("#food").val().trim();

  // retrieve user from sessionStorage
  var user = JSON.parse(sessionStorage.getItem("user"))

  // write to firebase database
  database.ref("users/" + user.uid).set({
    username: username,
    favoriteFood: favoriteFood
  })
    // then retrieve from database
    .then(function () {
      // call getUserInfo function with user.uid as argument
      getUserInfo(user.uid);
    })
})

// function to retrieve user info
function getUserInfo(uid) {
  database.ref("users/" + uid).once("value")
    .then(function (snapshot) {
      // console log the snapshot's value returned from database
      console.log(snapshot.val())

      // modify the dom to reflect new information
      $("#username").html(snapshot.val().username)
      $("#favoriteFood").html(snapshot.val().favoriteFood)
    })
}