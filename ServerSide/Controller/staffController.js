const StaffSchema = require('../Model/staffModel');

exports.getAllStaff=(request, response, next)=>{
    StaffSchema.find({})
        .then((data) => {
            response.status(200).json(data);
        }).catch((error) => {
            next(error)
        });
}


exports.addEmployee=(request, response, next)=>{
    let newMember = new StaffSchema({
        userId: request.body.userId,
        jobDescription: request.body.jobDescription,
        dateEmploye: request.body.dateEmploye,
    });
    newMember.save()
        .then((data) => {
            response.status(201).json({data:"data added successfully", newMember:data });
        })
        .catch((error)=>{next(error)});
    // response.status(201).json({data: "user added successfully"});
}
