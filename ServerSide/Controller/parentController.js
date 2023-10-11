const ParentSchema = require('../Model/parentModel');

exports.getAllParent=(request, response, next)=>{
    ParentSchema.find({})
        .then((data) => {
            response.status(200).json(data);
        }).catch((error) => {
            next(error)
        });
}

exports.addParent=(request, response, next)=>{
    let newParent = new ParentSchema({
        userId: request.body.userId,
        children: request.body.children,
    });
    newParent.save()
        .then((data) => {
            response.status(201).json({data:"data added successfully",newParent:data });
        })
        .catch((error)=>{next(error)});
    // response.status(201).json({data: "user added successfully"});
}
