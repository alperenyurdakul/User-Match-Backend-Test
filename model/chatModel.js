const mongoose =require('mongoose');

const Schema = mongoose.Schema;

const chatSchema = new Schema ({

    user_one: {
        type: Schema.Types.ObjectId,
        required: true,
    },
    user_two: {
        type: Schema.Types.ObjectId,
        required: true
    },
    

});

module.exports = mongoose.model('Chat',chatSchema);