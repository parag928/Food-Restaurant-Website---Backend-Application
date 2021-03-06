const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const leaderSchema = new Schema({
    id: {
        type: Number,
        required: true
    },
    name:  {
        type: String,
        required: true
    },
    image:  {
        type: String,
        required: true
    },
    designation: {
        type: String,
        required: true
    },
    abbr:{
        type: String,
        required: true
    },
    featured:{
        type: Boolean,
        required: true
    },
    description:{
        type: String,
        required: true
    }
}, {
    timestamps: true
});

var Leaders = mongoose.model('Leader', leaderSchema);

module.exports = Leaders;