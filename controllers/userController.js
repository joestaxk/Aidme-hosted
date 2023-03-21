const User = require('../models/userModel');
const bcrypt = require('bcryptjs');
const getDb = require('../utils/database').getDb;

exports.register = async (req, res, next) => {
  try {
    const {
      firstName,
      lastName,
      email,
      phoneNumber,
      address,
      country,
      gender,
      password
    } = req.body;

    const db = getDb();
    const user = await db.collection('users').findOne({ email });

    if (user) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const createUser = new User({
      firstName,
      lastName,
      email,
      phoneNumber,
      address,
      country,
      gender,
      password: hashedPassword,
      confirmPassword: hashedPassword
    });

    await db.collection('users').insertOne(createUser);
    res.status(201).json({ message: 'User created successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

