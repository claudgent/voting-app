const GitHubStrategy = require('passport-github2');
const configAuth = require('./auth');
const User = require('../models/User');

/* =====================PASSPORT CONFIG================= */

module.exports = (passport) => {
  passport.serializeUser((user, done) => {
    done(null, user);
  });

  passport.deserializeUser((obj, done) => {
    done(null, obj);
  });

  passport.use(new GitHubStrategy({
    clientID: configAuth.githubAuth.clientID,
    clientSecret: configAuth.githubAuth.clientSecret,
    callbackURL: configAuth.githubAuth.callbackURL,
  },
(token, refreshToken, profile, done) => {
  User.users.findOrCreate({ githubId: profile.id }, (err, user) => done(err, user));
},
));
};
