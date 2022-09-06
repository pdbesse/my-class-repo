const path = require('path');
const express = require('express');
// Import express-session
const session = require('express-session');
const exphbs = require('express-handlebars');

const routes = require('./controllers');
const sequelize = require('./config/connection');
const helpers = require('./utils/helpers');

const app = express();
const PORT = process.env.PORT || 3001;

// Set up sessions
const sess = {
  secret: 'Super secret secret',
  //https://www.npmjs.com/package/express-session#resave
  //Forces the session to be saved back to the session store, even if the session was never modified during the request.
  resave: false,
  //https://www.npmjs.com/package/express-session#saveuninitialized
  //Forces a session that is "uninitialized" to be saved to the store. A session is uninitialized when it is new but not modified.
  saveUninitialized: false,
};
app.use(session(sess));

const hbs = exphbs.create({ helpers });

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});
