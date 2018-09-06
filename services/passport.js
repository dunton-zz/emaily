// FILE FOR PASSPORT JS USE
const passport = require("passport"); // import passport
const GoogleStrategy = require("passport-google-oauth20").Strategy; // import GoogleStrategy
const keys = require("../config/keys.js"); // get api keys

// tells passport to use google strategy
// params tell Google how to authenticate
passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback"
    },
    (accessToken, refreshToken, profile, done) => {
      // this is where we save user info
      console.log("access token", accessToken);
      console.log("refresh token", refreshToken);
      console.log("profile", profile);
    }
  )
);
