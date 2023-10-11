const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    // _id:mongoose.Types.ObjectId,
    userName:String,
    password:Number,
    userType: { type: mongoose.Schema.Types.ObjectId, ref: 'UserType', required: true },
});

//Collection
module.exports=mongoose.model('user', UserSchema);