const express = require('express'),
      app = express(),
      RegisterRoutes = require('./register'),
      LoginRoutes = require('./login'),
      Drivers = require('./drivers');
      Constructors = require('./constructors');

app.use('/register', RegisterRoutes)

app.use('/login', LoginRoutes)

app.use('/drivers', Drivers)

app.use('/constructors', Constructors)

module.exports = app;