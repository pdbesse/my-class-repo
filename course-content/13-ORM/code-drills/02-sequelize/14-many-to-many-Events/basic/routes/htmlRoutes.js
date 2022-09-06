module.exports = function (app, path) {
  // html routes to individual pages
  app.get("/main", (req, res) => {
    res.sendFile("/views/authed.html", { root: path.join(__dirname, "../public") })
  })
  app.get("/myevents", (req, res) => {
    res.sendFile("/views/myevents.html", { root: path.join(__dirname, "../public") })
  })
  app.get("/attending", (req, res) => {
    res.sendFile("/views/attending.html", { root: path.join(__dirname, "../public") })
  })
  app.get("/create", (req, res) => {
    res.sendFile("/views/create.html", { root: path.join(__dirname, "../public") })
  })
  app.get("/profile", (req, res) => {
    res.sendFile("/views/profile.html", { root: path.join(__dirname, "../public") })
  })
  app.get("/login", (req, res) => {
    res.sendFile("/views/login.html", { root: path.join(__dirname, "../public") })
  })
  // send default page to all routes that are undefined
  app.get("*", (req, res) => {
    res.sendFile("/views/index.html", { root: path.join(__dirname, "../public") })
  })
}