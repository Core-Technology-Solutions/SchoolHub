const express = require('express');
const controller = require('../Controller/gradeController')
const router = express.Router(); // create routes object and return it



router.route('/SchoolHub/api/grade')
    .get(
        // here add your authentication layer
        // here add your authorization layer
        // here add your validation layer
        controller.getAllGrades
        )
    .post(controller.addGrades)



module.exports=router;