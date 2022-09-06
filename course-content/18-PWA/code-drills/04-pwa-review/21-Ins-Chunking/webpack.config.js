const config = {
  //We have added a second entry point to our bundle. This entry point is chart.
  //chart points to ./src/expenseChart.js.
  entry: {
    app: "./src/app.js",
    chart: "./src/expenseChart.js"
  },
  output: {
    path: __dirname + "/dist",
    //filename: "[name].bundle.js" dynamically names our bundle after the name of the entry point. For instance, the entry point chart will create a bundle named chart.bundle.js.
    //By creating multiple entry points, we can defer the loading of a particular bundle until the code required is needed.
    //example: The <script> tag to our html that loads our chart.js JavaScript bundle => <script type="text/javascript" src="./dist/chart.bundle.js"></script>
    filename: "[name].bundle.js"
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"]
          }
        }
      }
    ]
  }
};
module.exports = config;
