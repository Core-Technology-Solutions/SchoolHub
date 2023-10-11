const mongoose = require('mongoose');

const userTypeSchema  = new mongoose.Schema({
    // _id:mongoose.Types.ObjectId,
    name :{ type: String, unique: true, required: true },
});

//Collection
module.exports=mongoose.model('UserType', userTypeSchema );