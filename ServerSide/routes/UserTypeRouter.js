const express = require('express');
const controller = require('../Controller/UserTypeController')
const router = express.Router(); // create routes object and return it



router.route('/SchoolHub/api/UserType')
    .get(
        // here add your authentication layer
        // here add your authorization layer
        // here add your validation layer
        controller.getAllUsers
        )
    .post(controller.addUsers)



module.exports=router;