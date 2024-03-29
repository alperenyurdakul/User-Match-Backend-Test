const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
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
  firebase_id: {
    type: String,
    required: true
  },
  name: {
    type: String,
    default: ""
  },
  gender: {
    type: String,
    default: ""
  },
  wanted_gender: {
    type: String,
    default: ""
  },
  description: {
    type: String,
    default: ""
  },
  city: {
    type: String,
    default: ""
  },
  country: {
    type: String,
    default: ""
  },
  age_interval: {
    type: Object,
    default: {
      min: null,
      max: null
    }
  },
  birth_time: {
    type: Object,
    default: {
      day: null,
      month: null,
      year: null
    }
  },
  birth_location: {
    type: Object,
    default: {}
  },
  time_zone: {
    type: String,
    default: ""
  },
  completed: {
    type: Boolean,
    default: false
  },
  photo_completed: {
    type: Boolean,
    default: false
  },
  is_premium: {
    type: Boolean,
    default: false
  },
  premium_exp_date: {
    type: Number,
    default: null
  },
  sign: {
    type: String,
    default: ""
  },
  sign_id: {
    type: Number,
    default: -1
  },
  mars_sign: {
    type: String,
    default: ""
  },
  venus_sign: {
    type: String,
    default: ""
  },
  sign_combination: {
    type: String,
    default: ""
  },
  profile_photo_list: {
    type: Array,
    default: []
  },
  best_matches: {
    type: Array,
    default: []
  },
  mid_matches: {
    type: Array,
    default: []
  },
  old_matches: {
    type: Array,
    default: []
  },
  matched_users: {
    type: Array,
    default: []
  },
  chat_list: {
    type: Array,
    default: []
  },
  notification_permission: {
    type: Boolean,
    default: false
  },
  notification_token: {
    type: String,
    default: ""
  },
  language_preference: {
    type: String,
    default: ""
  }
});

userSchema.statics.girisYap =async (phone)=>{
  const user =  await User.findOne({phone})
  return user;
};

module.exports = mongoose.model('User', userSchema);


