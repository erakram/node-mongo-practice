const mongoose = require('mongoose');

const ContactSchema = mongoose.model({
    name: String,
    mobile: String,
    designation: String,
    // user_id: {
    //     type: Schema.ObjectId,
    //     ref: 'Contacts'
    // }
});

module.exports = mongoose.model('Contacts', ContactSchema);