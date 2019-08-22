const mongoose = require('mongoose');

const UserSchema = mongoose.Schema ({
    name: String,
    age: String,
    gender: String,
    email: String,
    contact: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Contact"
    }

});

module.exports = mongoose.model('User', UserSchema);