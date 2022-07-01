const express = require('express'),
      app  = express(),
      dbConfig = require('./Config/dbConfig'),
      Routes = require('./Routes/index'),
      bodyParser = require('body-parser'),
      swaggerJsdoc = require("swagger-jsdoc"),
      { options } = require('./Lib/swaggerDoc'),
      swaggerUi = require("swagger-ui-express");
      PORT = process.env.SERVER_PORT || 4000;
      require('dotenv').config(),
      // cron = require('node-cron');



// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse Application/json
app.use(bodyParser.json())

app.listen(PORT, () => {
  console.log(`API is running on: http://localhost:${PORT}`)
})

const specs = swaggerJsdoc(options);
app.use('/api-docs',
swaggerUi.serve,
swaggerUi.setup(specs)
);
app.use('/api/v1/', Routes)

app.get('*', (req, res) => {
  res.status(404).type('txt').send('nothing to see here ):');
});


dbConfig.connectDb(process.env.DATABASE_HOST);