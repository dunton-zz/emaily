const express = require("express"); // import express
const app = express(); // generate new express app

// get = watch for 'get' requests at '/'
// ROUTE HANDLER
app.get("/", (req, res) => {
  // req = incoming request
  // res = outgoing response
  // send = immediately close request and send back response
  res.send({ hi: "there" });
});

const PORT = process.env.PORT || 5000;
// tells NODE to listen on Port 5000
app.listen(PORT);
