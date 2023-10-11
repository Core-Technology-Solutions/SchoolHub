const userTypeSchema = require('../Model/userTypesModel');

exports.getAllUsers=(request, response, next)=>{
    userTypeSchema.find({})
        .then((data) => {
            response.status(200).json(data);
        }).catch((error) => {
            next(error)
        });
}

exports.addUsers=(request, response, next)=>{
    let newUser = new userTypeSchema({
        // _id:request.body.id,
        name:request.body.name,
    });
    newUser.save()
        .then((data) => {
            response.status(201).json({data:"data added successfully",newUser:data });
        })
        .catch((error)=>{next(error)});
    // response.status(201).json({data: "user added successfully"});
}
