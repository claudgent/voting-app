const express = require('express');
const passport = require('passport');

/* =====================EXPRESS ROUTING================= */


/* =====================GET REQUESTS=============== */
const router = express.Router();

router.get('/', (req, res) => {
  res.render('home', { user: req.user });
});

router.get('/dash', ensureAuthenticated, (req, res) => {
  res.render('dash', { user: req.user });
});

// where individual polls will be displayed
router.get('/poll', (req, res) => {
  res.render('poll', { user: req.user });
});

router.get('/auth/github',
  passport.authenticate('github', { scope: ['user:email'] }));

router.get('/auth/github/callback',
  passport.authenticate('github', {
    successRedirect: '/dash',
    failureRedirect: '/home',
    failureFlash: true }),
  (req, res) => {
    // Successful authentication, redirect home.
    console.log(res);
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
