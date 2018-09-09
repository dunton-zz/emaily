const express = require("express"); // import express
const mongoose = require("mongoose"); // import mongoose
const cookieSession = require("cookie-session"); // import cookie session
const passport = require("passport"); // import passport
const keys = require("./config/keys"); // import keys
require("./models/User"); // import in User model schema, so it executes
require("./services/passport"); // import passport.js file, this makes it execute

mongoose.connect(keys.mongoURI);
const app = express(); // generate new express app

/*
  app.use calls are middlewares take take incoming request and makes
  small but in crucial changes to it. Preprocessing of incoming requests.
  Great spot to put in logic that is used in many handlers
*/

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
    keys: [keys.cookieKey]
  })
);

app.use(passport.initialize());
app.use(passport.session());

// call authRoutes function
// returns function then immediately calls function with app object
require("./routes/authRoutes")(app);

const PORT = process.env.PORT || 5000;
// tells NODE to listen on Port 5000
app.listen(PORT);
