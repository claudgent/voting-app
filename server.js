import express from 'express';
import session from 'express-session';
import passport from 'passport';
import mongoose from 'mongoose';
import hbs from 'express-handlebars';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';

const app = express();

// mongoose.connect(process.env.MONGO_URI);
mongoose.Promise = global.Promise;

app.use(session({
  secret: 'ponydog',
  resave: false,
  saveUninitialized: true,
}));

app.engine('hbs', hbs.create({
  extname: 'hbs',
  defaultLayout: 'main',
  layoutsDir: `${app.get('views')}/layouts`,
  partialsDir: [`${app.get('views')}/partials`],
}).engine);
app.set('view engine', 'hbs');

app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));

// Initialize Passport & passport.session() for persistent login sessions.
app.use(passport.initialize());
app.use(passport.session());

app.use('/public', express.static(`${process.cwd()}/public`));

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Server listening on port ${port}...`);
});
