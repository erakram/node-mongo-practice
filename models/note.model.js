const mongoose = require('mongoose');

const ApiSchema = mongoose.Schema({
    title: String,
    content: String
} , {
    timestamps: true
});

module.exports = mongoose.model('Note', ApiSchema);