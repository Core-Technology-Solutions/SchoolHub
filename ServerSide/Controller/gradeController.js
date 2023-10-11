const GradeSchema = require('./../Model/gradeModel');




exports.getAllGrades=(request, response, next)=>{
    GradeSchema.find({})
        .then((data) => {
            response.status(200).json(data);
        }).catch((error) => {
            next(error)
        });
    // response.status(200).json({data: [{id:1 , name:"Ahmed"},{id:2 , name:"Salah"}]});
}

exports.addGrades=(request, response, next)=>{
    let newGrade = new GradeSchema({
        name:request.body.name,
        students:request.body.students,
    });
    newGrade.save()
        .then((data) => {
            response.status(201).json({data:"data added successfully",newGrade:data });
        })
        .catch((error)=>{next(error)});
    // response.status(201).json({data: "Student added successfully"});
}
