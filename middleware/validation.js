
const { check, validationResult } = require('express-validator');

exports.validateDoctor = [
  check('email')
  .isEmail()
  .withMessage('Invalid email'),
  check('contactNumber')
  .isMobilePhone('en-IN')
  .withMessage('Invalid mobile number mobile number shoukd follow en-IN format'),//check if the value is a valid mobile phone number in the Indian format.
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  }
];
