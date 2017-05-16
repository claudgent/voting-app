const express = require('express');
const session = require('express-session');
const passport = require('passport');
const mongoose = require('mongoose');
const hbs = require('express-handlebars');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const router = require('./app/routes/router');

const app = express();
require('./app/config/passport')(passport);

// mongoose.connect(process.env.MONGO_URI);
mongoose.Promise = global.Promise;

app.engine('hbs', hbs.create({
  extname: 'hbs',
  defaultLayout: 'main',
  layoutsDir: `${app.get('views')}/layouts`,
  partialsDir: [`${app.get('views')}/partials`],
}).engine);
app.set('view engine', 'hbs');

app.use(session({
  secret: 'ponydog',
  resave: false,
  saveUninitialized: true,
}));

app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));

require('passport')(passport);

// Initialize Passport & passport.session() for persistent login sessions.
app.use(passport.initialize());
app.use(passport.session());

app.use('/public', express.static(`${process.cwd()}/public`));
app.use('/', router);

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Server listening on port ${port}...`);
});
