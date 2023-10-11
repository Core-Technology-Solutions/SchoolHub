const mongoose = require('mongoose');

const ParentSchema = new mongoose.Schema({

    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    children: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Student' }], // Reference to their children (students)
    // Other parent-specific properties
});

//Collection
module.exports=mongoose.model('parent', ParentSchema);