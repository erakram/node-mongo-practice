const mongoose = require('mongoose');

const UserSchema = mongoose.Schema ({
    name: String,
    age: Number,
    gender: Boolean,
    email: String,
    contact: {
        type: Schema.ObjectId,
        ref: 'Contacts'
    }

});

module.exports = mongoose.model('Users', UserSchema);