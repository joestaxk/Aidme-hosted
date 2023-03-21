const User = require('../models/userModel');
const bcrypt = require('bcryptjs');
const { body, validationResult } = require('express-validator');
//const getDb = require('../utils/database').getDb;

exports.register = async (req, res, next) => {
  await body('firstName').trim().not().isEmpty().withMessage('First name is required').run(req);
  await body('lastName').trim().not().isEmpty().withMessage('Last name is required').run(req);
  await body('email').isEmail().withMessage('Invalid email address').normalizeEmail().run(req);
  await body('phoneNumber').optional().isMobilePhone().withMessage('Invalid phone number').run(req);
  await body('address').optional().trim().not().isEmpty().withMessage('Address is required').run(req);
  await body('country').optional().trim().not().isEmpty().withMessage('Country is required').run(req);
  await body('gender').optional().isIn(['male', 'female', 'other']).withMessage('Invalid gender').run(req);
  await body('password').isLength({ min: 8 }).withMessage('Password must be at least 8 characters long').run(req);
  await body('confirmPassword').custom((value, { req }) => {
    if (value !== req.body.password) {
      throw new Error('Passwords do not match');
    }
    return true;
  }).run(req);

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

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

   // const db = getDb();
    // const user = await db.collection('users').findOne({ email });
    const user = await User.findOne({ email });

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

    // await db.collection('users').insertOne(createUser);
    await createUser.save();
    res.status(201).json({ message: 'User created successfully' });
};
