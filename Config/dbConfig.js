const mongoose = require('mongoose');


function connectDb(dbUrl) {

  console.log('se conecta a: ', dbUrl)
  mongoose.connect(dbUrl, { useUnifiedTopology: true})
    .then(result => {
      console.log('MongoDB connected..........', );
    })
    .catch(reason => {
      console.log('DB Eroor: ', reason);
      process.exit(1);
    })
}


module.exports = {
  connectDb
}