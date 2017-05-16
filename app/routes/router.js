const express = require('express');
const passport = require('passport');

const router = express.Router();

router.get('/', (req, res) => {
  res.render('home', { user: req.user });
});

router.get('/login', (req, res) => {
  res.render('login', { user: req.user });
});

router.get('/account', ensureAuthenticated, (req, res) => {
  res.render('account', { user: req.user });
});

router.get('/auth/github',
  passport.authenticate('github', { scope: ['user:email'] }));

router.get('/auth/github/callback',
  passport.authenticate('github', { failureRedirect: '/login' }),
  (req, res) => {
    // Successful authentication, redirect home.
    res.redirect('/');
  });

function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect('/login');
}

module.exports = router;
