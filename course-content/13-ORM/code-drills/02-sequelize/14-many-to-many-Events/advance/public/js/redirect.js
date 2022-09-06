// check if localStorage contains data for "user"
if (window.localStorage.getItem("user")) {
  // then send authed page if user exists
  $("#content").load("/views/authed.html")
} else {
  // or send login page if user doesn't exist
  $("#content").load("/views/login.html")
}