const mongoose = require('mongoose');

// Customer Schema

const customerSchema = mongoose.Schema({
    firstName: { type: String},
    secondName: { type: String},
    email: { type: String},
    phoneNumber: { type: String}
});

//Define and Export

module.exports = mongoose.model('Customer', customerSchema);