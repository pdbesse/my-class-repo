module.exports = function (app, path) {
  // send default page to all routes that are undefined
  app.get("/*", (req, res) => {
    res.sendFile("/views/index.html", { root: path.join(__dirname, "../public") })
  })
}