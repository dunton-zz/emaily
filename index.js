const express = require("express"); // import express
const mongoose = require("mongoose"); // import mongoose
const keys = require("./config/keys"); // import keys
require("./services/passport"); // import passport.js file, this makes it execute

mongoose.connect(keys.mongoURI);
const app = express(); // generate new express app

// call authRoutes function
// returns function then immediately calls function with app object
require("./routes/authRoutes")(app);

const PORT = process.env.PORT || 5000;
// tells NODE to listen on Port 5000
app.listen(PORT);
