const express = require('express');
const controller = require('../Controller/quizController')
const router = express.Router(); // create routes object and return it



router.route('/SchoolHub/api/quiz')
    .get(
        // here add your authentication layer
        // here add your authorization layer
        // here add your validation layer
        controller.getAllQuizzes
        )
    .post(controller.addQuizzes)



module.exports=router;