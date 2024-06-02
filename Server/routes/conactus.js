const contactUsController = require('../controller/contactus');
const express = require('express');

const router = express.Router();

router.post('/',contactUsController.insertContactUsData);

exports.router = router;