const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
//To store the session information in the database, we will use express-session-sequalize:
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const routes = require('./controllers');
const sequelize = require('./config/connection');
const helpers = require('./utils/helpers');

const app = express();
const PORT = process.env.PORT || 3001;

// Basics: 
// The server issues a cookie that gets sent to the web browser and stored for a period of time (called the expiration time).
// When a user makes a subsequent request to the web server, this cookie gets sent along with the request, and the server can read the information that is in it.
// The server can manipulate the cookie if it needs to, and then sends it back to the browser.

//Stateless
//Requests will not be associated with each other absent some shared info the server knows about, 
//which in most cases is a session ID in a cookie.
//HTTP is a stateless protocol. A stateless protocol does not require the server to retain information or status about each user for the duration of multiple requests.

// Cookies
// They can only store small bits of data, about 4KB usually.
// They are sent in every request

// Set up sessions with cookies
const sess = {
  secret: 'Super secret secret',
  //In the server, note that the session object has a cookie attribute. This property is used by express-session to set various options for the session cookie.
  cookie: {
    // Stored in milliseconds (86400 === 1 day)
    //Note: In this demo, we specify a maxAge, but it is not necessary to do so. A default maxAge will be added automatically if you don't declare one.
    //express-session-sequelize will periodically check the cookie.expires property to determine whether the sid should be removed from the database or not.
    // maxAge: 86400,
    maxAge: 86400,
  },
  resave: false,
  //https://www.npmjs.com/package/express-session#saveuninitialized
  //Forces a session that is "uninitialized" to be saved to the store. A session is uninitialized when it is new but not modified.
  saveUninitialized: true,
  //https://www.npmjs.com/package/express-session#store
  //The session store instance, defaults to a new MemoryStore instance.
  //Once a session id, or sid, is generated on the server, express-session will reflect that information in a cookie on the client.
  store: new SequelizeStore({
    db: sequelize,
  }),
};


// Exmaple: 

// Client Side Cookie: 
// s%3AU-jhz9ferT3VptnCJKDPn_MhNxX1VKIF.lZpl9dUzIXiaaNw0kDgbhzqWWmdZzDWFRVzGcx2%2F6J8
// URI Encoding: s%3
// Session ID: AU-jhz9ferT3VptnCJKDPn_MhNxX1VKIF
// Server Side: 
// s%3AU-jhz9ferT3VptnCJKDPn_MhNxX1VKIF.lZpl9dUzIXiaaNw0kDgbhzqWWmdZzDWFRVzGcx2%2F6J8
// Signature of Cookie: lZpl9dUzIXiaaNw0kDgbhzqWWmdZzDWFRVzGcx2%2F6J8 - Used to verify the integrity of  Cookie


app.use(session(sess));

const hbs = exphbs.create({ helpers });

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () =>
    console.log(
      `\nServer running on port ${PORT}. Visit http://localhost:${PORT} and create an account!`
    )
  );
});
