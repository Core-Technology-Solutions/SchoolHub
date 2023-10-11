const StudentSchema = require('./../Model/studentModel');


exports.getStudentById=(request, response, next)=>{
    StudentSchema.findOne({_id:request.params.id})
        .then((data) => {
            if (data == null)
            throw new Error ("Student dosen't exist")
            response.status(200).json(data);
        }).catch((error) => {
            next(error)
        });
}

exports.getAllStudents=(request, response, next)=>{
    StudentSchema.find({})
        .then((data) => {
            response.status(200).json(data);
        }).catch((error) => {
            next(error)
        });
    // response.status(200).json({data: [{id:1 , name:"Ahmed"},{id:2 , name:"Salah"}]});
}

exports.addStudents=(request, response, next)=>{
    let newStudent = new StudentSchema({
        studentId:request.body.studentId,
        name:request.body.name,
        email:request.body.email,
        enrolledGrades:request.body.enrolledGrades
    });
    newStudent.save()
        .then((data) => {
            response.status(201).json({data:"data added successfully",newStudent:data });
        })
        .catch((error)=>{next(error)});
    // response.status(201).json({data: "Student added successfully"});
}

exports.updateStudents=(request, response, next)=>{
    StudentSchema.updateOne({
        _id:request.body.id,
    },{
        $set:{name:request.body.name}
    })
        .then((data) => {
            response.status(200).json({data:"Student updated successfully"});
        }).catch((error) => {
            next(error)
        });
    // response.status(200).json({data: "Student updated successfully"});
}

exports.deleteStudents=(request, response, next)=>{
    const StudentId = request.params.id; // Assuming the ID is passed as a URL parameter

    StudentSchema.findByIdAndDelete(StudentId)
        .then((deletedStudent) => {
            if (!deletedStudent) {
                throw new Error("Student not found");
            }
            response.status(200).json({ message: "Student deleted successfully" });
        })
        .catch((error) => {
            next(error);
        });

    // response.status(200).json({data: "Student deleted successfully"});
}