const mongoose = require('mongoose');

const StaffSchema = new mongoose.Schema({

    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    jobDescription: { type: String,  required: true },
    dateEmploye: { type: Date, required: true },
    // Other staff-specific properties
});

//Collection
module.exports=mongoose.model('staff', StaffSchema);