const mongoose = require('mongoose');

const SubjectSchema = new mongoose.Schema({

    name: { type: String, required: true }, // e.g., "Math", "Science", "History"
    description: { type: String },
    quizzes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Quiz' }],
});

//Collection
module.exports=mongoose.model('subject', SubjectSchema);