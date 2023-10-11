const express = require('express');
const controller = require('./../Controller/studentController')
const router = express.Router(); // create routes object and return it



router.route('/SchoolHub/api/student')
    .get(
        // here add your authentication layer
        // here add your authorization layer
        // here add your validation layer
        controller.getAllStudents
        )
    .post(controller.addStudents)
    .patch(controller.updateStudents)
    

router.route('/SchoolHub/api/student/:id?')
    .get(controller.getStudentById)
    .delete(controller.deleteStudents)


module.exports=router;