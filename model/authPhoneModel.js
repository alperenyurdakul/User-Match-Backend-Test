const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const authPhoneSchema = new Schema({
    phone: {
        type: String,
        required: true,
        minlength: 1,
        unique: true
      },
      last_active: {
        type: Number,
        required: true
      },
      created_at: {
        type: Number,
        required: true
      },
      completed: {
        type: Boolean,
        default: false
      }, 
});

module.exports = mongoose.model('authPhone',authPhoneSchema);