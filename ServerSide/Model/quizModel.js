const mongoose = require('mongoose');

const QuizSchema = new mongoose.Schema({

    subject: { type: mongoose.Schema.Types.ObjectId, ref: 'Subject', required: true },
    title: { type: String, required: true },
    type: { type: String, enum: ['term', 'midterm', 'final'], required: true }, // Quiz type
    questions: [
    {
        questionText: { type: String, required: true },
        options: [{ type: String, required: true }],
        correctOption: { type: Number, required: true },
    },
    ],
    // You can add more fields like start time, end time, etc., as needed.
});

//Collection
module.exports=mongoose.model('quiz', QuizSchema);