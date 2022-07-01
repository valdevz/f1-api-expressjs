const express = require('express'),
      app = express(),
      RegisterRoutes = require('./register'),
      LoginRoutes = require('./login'),
      Drivers = require('./drivers');
      Constructors = require('./constructors'),
      swaggerJsdoc = require("swagger-jsdoc"),
      { options } = require('../Lib/swaggerDoc'),
      swaggerUi = require("swagger-ui-express");

app.use('/register', RegisterRoutes)

app.use('/login', LoginRoutes)

app.use('/drivers', Drivers)

app.use('/constructors', Constructors)

const specs = swaggerJsdoc(options);
app.use('/',swaggerUi.serve, swaggerUi.setup(specs));

module.exports = app;