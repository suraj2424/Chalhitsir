const model = require('../model/contactus');
const ContactUsSchema = model.ContactUs;

exports.insertContactUsData = (req, res)=>{

    const contactusdata = new ContactUsSchema(req.body);
    
    contactusdata.save().then((doc)=>{
       return res.status(200).json({doc})
    }).catch((err)=>{
        return res.status(400).json({err})
    })

}