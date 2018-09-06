// FILE FOR HANDLING ROUTES
const passport = require("passport");

// export routes
module.exports = app => {
  // watch for 'get' requests at '/auth/google'
  app.get(
    "/auth/google",
    // 'google' tells passport to use the google strategy
    passport.authenticate("google", {
      scope: ["profile", "email"] // list of internal permissions we want
    })
  );

  // passport.authenticate is same but since already authenticated it brings them to user profile
  app.get("/auth/google/callback", passport.authenticate("google"));
};
