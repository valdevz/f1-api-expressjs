const mongoose    = require('mongoose'),
      Schema      = mongoose.Schema;

let Constructor = new Schema({

  constructorId    :  { type: String, required: true, trim: true },
  name        :  { type: String, required: true, trim: true }, 
  nationality :  { type: String, required: true, trim: true },
  infoUrl    :  { type: String, required: true, trim: true },
  updateDate  :  { type: Number, default: Date.now, index: true }
  
})

module.exports = mongoose.model('Constructor',Constructor);