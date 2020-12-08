const { body, check, validationResult } = require('express-validator')

const userValidationRules = () => {
    return [
        body('email').isEmail().normalizeEmail().withMessage('Must be a valid email format'),
        body('password').isStrongPassword({ minLength: 8, minLowercase: 1, minUppercase: 1, minNumbers: 1, minSymbols: 1}).withMessage('Password should not be empty, minimum eight characters, at least one letter, one number and one special character')
      ]
  }

  const validate = (req, res, next) => {
    const errors = validationResult(req)
    if (errors.isEmpty()) {
      return next()
    }
    const extractedErrors = []
    errors.array().map(err => extractedErrors.push({ [err.param]: err.msg }))
    console.log(errors)
    return res.status(422).json({
      errors: extractedErrors,
    })
  }
  
  module.exports = {
    userValidationRules,
    validate
  }