const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AppSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now()
    }
});

module.exports = App = mongoose.model('myApp', AppSchema);
