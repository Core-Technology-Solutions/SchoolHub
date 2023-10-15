const express = require('express');
const router = express.Router();
const User = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

router.post('/register', async (req, res) => {
  try {
    const { email, password, role } = req.body;

    const user = new User({ email, password, role });
    await user.save();

    res.status(201).send({ message: 'User registered successfully' });
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
}); 

router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user || !(await user.isValidPassword(password))) {
      return res.status(401).send({ error: 'Invalid email or password' });
    }

    const token = jwt.sign({ userId: user._id, role: user.role }, 'SECRET_KEY', { expiresIn: '1h' }); 

    res.send({ token, role: user.role });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

module.exports = router;


