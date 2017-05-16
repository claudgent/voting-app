import GitHubStrategy from 'passport-github2';
import User from '../models/users';
import configAuth from './auth';

module.exports = (passport) => {
  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => {
      done(err, user);
    });
  });

  passport.use(new GitHubStrategy({
    clientID: configAuth.githubAuth.clientID,
    clientSecret: configAuth.githubAuth.clientSecret,
    callbackURL: configAuth.githubAuth.callbackURL,
  },
(token, refreshToken, profile, done) => {
  process.nextTick(() => done(null, profile));
}));
};
