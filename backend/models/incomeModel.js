const mongoose = require('mongoose');

const IncomeSchema = new mongoose.Schema({
      title: {
        type: String,
        required: true,
        trim: true,
        maxlength: 50
      },
      amont: {
        type: Number,
        required: true,
        maxlength: 20,
        trim: true
      },
      type: {
        type: String,
        default : 'income',
      },
      category: {
        type: String,
        required: true,
        trim: true,
      },
      description : {   
        type: String,
        required: true,
        maxlength: 20,
        trim: true
      },
    }, {timestamps: true})

module.exports = mongoose.model('Income', IncomeSchema);
