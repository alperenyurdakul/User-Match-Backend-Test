const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const matchSchema = new Schema({
    user_one: {
        type: Schema.Types.ObjectId,
        required: true,
    },
    user_two: {
        type: Schema.Types.ObjectId,
        required: true
    },
    user_one_liked: {
        type: Number,
        default:0
    },
    user_two_liked: {
        type: Number,
        default:0
    },
    user_one_liked_date: {
        type: Date,
        default: (new Date()).getTime()
    },
    user_two_liked_date: {
        type: Date,
    }
});

module.exports = mongoose.model('match', matchSchema);