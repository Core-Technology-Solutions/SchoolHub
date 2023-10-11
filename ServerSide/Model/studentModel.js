const mongoose = require('mongoose');

const StudentSchema = new mongoose.Schema({

    studentId: { type: String, unique: true, required: true },
    name: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    enrolledGrades: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Grade' }],
});

//Collection
module.exports=mongoose.model('student', StudentSchema);