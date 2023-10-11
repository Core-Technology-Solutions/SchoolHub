const express = require('express');
const controller = require('./../Controller/subjectController')
const router = express.Router(); // create routes object and return it



router.route('/SchoolHub/api/subject')
    .get(
        // here add your authentication layer
        // here add your authorization layer
        // here add your validation layer
        controller.getAllSubjects
        )
    .post(controller.addSubject)


module.exports=router;