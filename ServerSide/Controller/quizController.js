const QuizSchema = require('../Model/quizModel');

exports.getAllQuizzes=(request, response, next)=>{
    QuizSchema.find({})
        .then((data) => {
            response.status(200).json(data);
        }).catch((error) => {
            next(error)
        });
}

exports.addQuizzes=(request, response, next)=>{
    let newQuiz = new QuizSchema({
        subject: request.body.subject,
        title: request.body.title,
        type: request.body.type,
        questions:request.body.questions,
        // You can add more fields like start time, end time, etc., as needed.
    });
    newQuiz.save()
        .then((data) => {
            response.status(201).json({data:"data added successfully",newQuiz:data });
        })
        .catch((error)=>{next(error)});
    // response.status(201).json({data: "user added successfully"});
}
