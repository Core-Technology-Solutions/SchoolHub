const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
    lowercase: true,
    match: [emailRegex, 'Email is invalid'] // Using regex for email validation
  },
  password: {
    type: String,
    required: true,
    trim: true
  },
  role: {
    type: String,
    enum: ['admin', 'student', 'parent', 'staff'],
    required: true,
  }
});

userSchema.pre('save', async function(next) {
  if (this.isModified('password')) {
    this.password = await bcrypt.hash(this.password, 10);
  }
  next();
});

userSchema.methods.isValidPassword = async function(password) {
  return await bcrypt.compare(password, this.password);
};

module.exports = mongoose.model('User', userSchema);


/*const UserSchema = new mongoose.Schema({
    // _id:mongoose.Types.ObjectId,
    userName:String,
    password:Number,
    userType: { type: mongoose.Schema.Types.ObjectId, ref: 'UserType', required: true },
}); */