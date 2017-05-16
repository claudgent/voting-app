

const express = require('express');
const session = require('express-session');
const mongoose = require('mongoose');
const passport = require('passport');
const hbs = require('express-handlebars');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

const app = express();

// mongoose.connect(process.env.MONGO_URI);
// mongoose.Promise = global.Promise;

app.engine('hbs', hbs.create({
  extname: 'hbs',
  defaultLayout: 'main',
  layoutsDir: `${app.get('views')}/layouts`,
  partialsDir: [`${app.get('views')}/partials`],
}).engine);
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
  res.render('home.hbs');
});

app.get('/auth/github',
  passport.authenticate('github', { scope: ['user:email'] }));

app.get('/auth/github/callback',
  passport.authenticate('github', { failureRedirect: '/login' }),
  (req, res) => {
    // Successful authentication, redirect home.
    res.redirect('/');
  });

app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/public', express.static(`${process.cwd()}/public`));

app.use(session({
  secret: 'ponydog',
  resave: false,
  saveUninitialized: true,
}));


const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Server listening on port ${port}...`);
});
