const express = require('express');
const controller = require('../Controller/parentController')
const router = express.Router(); // create routes object and return it



router.route('/SchoolHub/api/parent')
    .get(
        // here add your authentication layer
        // here add your authorization layer
        // here add your validation layer
        controller.getAllParent
        )
    .post(controller.addParent)



module.exports=router;