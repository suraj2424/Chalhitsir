const mongoose = require('mongoose');
const { Schema } = mongoose;

const contactusSchema = new Schema({
    name:'string',
    email:'string',
    phone:'number',
    message:'string'
})

exports.ContactUs = mongoose.model('ContactUs',contactusSchema);