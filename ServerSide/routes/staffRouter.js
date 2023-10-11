const express = require('express');
const controller = require('../Controller/staffController')
const router = express.Router(); // create routes object and return it



router.route('/SchoolHub/api/staff')
    .get(
        // here add your authentication layer
        // here add your authorization layer
        // here add your validation layer
        controller.getAllStaff
        )
    .post(controller.addEmployee)



module.exports=router;