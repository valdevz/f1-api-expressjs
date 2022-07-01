const express = require('express'),
      app  = express(),
      router = express.Router(),
      dbConfig = require('./Config/dbConfig'),
      Routes = require('./Routes/index'),
      bodyParser = require('body-parser'),
      PORT = process.env.SERVER_PORT || 4000;
      require('dotenv').config(),
      path = require('path');



app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.listen(PORT, () => {
  console.log(`API is running on: https://api-f1.herokuapp.com:${PORT}`)
})

app.use('/v1/api/', Routes)

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, '/Utils/404-template.html'));
})

app.get('*',(req, res) => {
  res.status(404).type('html').send('<a href="https://api-f1.herokuapp.com/v1/api">documentation</a>');
});

dbConfig.connectDb(process.env.DATABASE_HOST);