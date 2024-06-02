const mongoose = require('mongoose');
const { Schema } = mongoose;

const contactusSchema = new Schema({
    title:'string',
    description:'string',
})

exports.ContactUs = mongoose.model('ContactUs',contactusSchema);