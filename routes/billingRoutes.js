const keys = require("../config/keys");
const stripe = require("stripe")(keys.stripeSecretKey);
module.exports = app => {
  // watch for POST requests sent to api/stripe route
  app.post("/api/stripe", async (req, res) => {
    const charge = await stripe.charges.create({
      // create call returns a Promise
      amount: 500,
      currency: "usd",
      description: "$5 for 5 credits",
      source: req.body.id
    });
    console.log(charge);
  });
};
