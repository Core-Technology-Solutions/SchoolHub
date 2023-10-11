const mongoose = require('mongoose');

const GradeSchema = new mongoose.Schema({

    name: { type: String, unique: true, required: true }, // e.g., "Grade 1", "Grade 2", "Grade 3"
    students: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Student' }],
});

//Collection
module.exports=mongoose.model('grade', GradeSchema);