const SubjectSchema = require('../Model/subjectModel');

exports.getAllSubjects=(request, response, next)=>{
    SubjectSchema.find({})
        .then((data) => {
            response.status(200).json(data);
        }).catch((error) => {
            next(error)
        });
}

exports.addSubject=(request, response, next)=>{
    let newSubject = new SubjectSchema({
        name: request.body.name,
        description: request.body.description,
        quizzes: request.body.quizzes,
    });
    newSubject.save()
        .then((data) => {
            response.status(201).json({data:"data added successfully",newSubject:data });
        })
        .catch((error)=>{next(error)});
    // response.status(201).json({data: "user added successfully"});
}
