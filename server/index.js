const express = require('express');
const app = express();
const path = require('path');
const parser = require('body-parser');

//// CONFIGURING PASSPORT /////
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var session = require('express-session');
app.use(session({secret: 'flyingMongeese'}));



app.use(parser.json());
app.use(express.static(path.join(__dirname, '../client/dist')));

//// Initialize Passport ////
app.use(passport.initialize());
app.use(passport.session());

app.get('/', (req, res) => {
  // For Evan's homepage
});

app.post('/login', (req, res) => {
  console.log('received request: ', req.body);
});

app.post('/', (req, res) => {
  // default post
});

app.post('/', (req, res) => {
  // default post
});

app.post('/', (req, res) => {
  // default post
});

// this is quite a small change
var port = process.env.PORT || 3007;
app.listen(port, () => {
  console.log('FlyingMongeese listening on PORT 3007!');
});