const mongoose    = require('mongoose'),
      Schema      = mongoose.Schema;

let Driver = new Schema({

  driverId    :  { type: String, required: true, trim: true },
  number      :  { type: Number, required: true, trim: true },
  name        :  { type: String, required: true, trim: true }, 
  lastname    :  { type: String, required: true, trim: true },
  dateOfBirth :  { type: String, required: true, trim: true },
  nationality :  { type: String, required: true, trim: true },
  age         :  { type: Number, required: true, trim: true },
  updateDate  :  { type: Number, default: Date.now, index: true }

})

module.exports = mongoose.model('Driver',Driver);