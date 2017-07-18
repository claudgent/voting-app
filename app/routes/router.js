const express = require('express');
const passport = require('passport');
const addtoDB = require('../controllers/poll');
const showPoll = require('../controllers/show');
const getData = require('../controllers/data');

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
router.get('/polls/:pollName', (req, res) => {
  showPoll(req, res);
});

router.get('/api', (req, res) => {
  getData(req, res);
});

/* =====================AUTH REQUESTS=================== */

router.get('/auth/github',
  passport.authenticate('github', { scope: ['user:email'] }));

router.get('/auth/github/callback',
  passport.authenticate('github', {
    successRedirect: '/dash',
    failureRedirect: '/',
    failureFlash: true }));

/* =====================POST REQUESTS=================== */
router.post('/newpoll', (req, res) => {
  addtoDB(req);
  res.send('got poll');
});

/* =====================HELPERS========================= */

function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect('/home');
}

module.exports = router;
