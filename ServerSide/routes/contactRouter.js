const express = require('express');
const controller = require('./../Controller/contactController')
const router = express.Router(); // create routes object and return it


router.route('SchoolHub/api/contact')
    .post(express.json(),express.urlencoded,controller.addInfo)




module.exports=router;