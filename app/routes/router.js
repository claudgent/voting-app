const express = require('express');
const passport = require('passport');

/* =====================EXPRESS ROUTING================= */


/* =====================GET REQUESTS=============== */
const router = express.Router();

router.get('/', (req, res) => {
  res.render('home', { user: req.user });
});

router.get('/dash', (req, res) => {
  res.render('dash', { user: req.user });
});

router.get('/account', ensureAuthenticated, (req, res) => {
  res.render('account', { user: req.user });
});

router.get('/auth/github',
  passport.authenticate('github', { scope: ['user:email'] }));

router.get('/auth/github/callback',
  passport.authenticate('github', { failureRedirect: '/home' }),
  (req, res) => {
    // Successful authentication, redirect home.
    res.redirect('/');
  });

/* =====================POST REQUESTS============== */


/* =====================HELPERS========================= */

function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect('/home');
}

module.exports = router;
