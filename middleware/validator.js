const { body, validationResult, param } = require('express-validator')

const userValidationRules = () => {
    return [
        body('email').isEmail().normalizeEmail().withMessage('Must be a valid email format'),
        body('password').isStrongPassword({ minLength: 8, minLowercase: 1, minUppercase: 1, minNumbers: 1, minSymbols: 1}).withMessage('Password should not be empty, minimum eight characters, at least one letter, one number and one special character')
      ]
  }

const accountSettingValidationRules = () => {
    return [
        body('email').isEmail().normalizeEmail().withMessage('Must be a valid email format'),
        body('password').isStrongPassword({ minLength: 8, minLowercase: 1, minUppercase: 1, minNumbers: 1, minSymbols: 1}).withMessage('Password should not be empty, minimum eight characters, at least one letter, one number and one special character'),
        body('name').isAlpha().withMessage('Must be text only'),
      ]
  }


  const usernameParamsValidation = () => {
    return [
        param('username').isAlpha().withMessage('Must be a valid email format'),
        param('username').customSanitizer((value, { req }) => {
            return req.query.type === 'user' ? ObjectId(value) : Number(value);
          })
      ]
  }

 
  const validate = (req, res, next) => {
    const errors = validationResult(req)
    if (errors.isEmpty()) {
      return next()
    }
    const extractedErrors = []
    errors.array().map(err => extractedErrors.push({ [err.param]: err.msg }))
    return res.status(422).json({
      errors: extractedErrors,
    })
  }
  
  module.exports = {
    userValidationRules,
    validate,
    usernameParamsValidation
  }


//JOI

// const pattern = "/(?=.*[a-z])(?=.*[A-Z])(?=.*d)(?=.*[$@$!#.])[A-Za-zd$@$!%*?&.]{8,20}/";
// celebrate({
//     [Segments.BODY]: Joi.object().keys({
//      email: Joi.string().email({ minDomainSegments: 2 }).required(),
//       username: Joi.string().alphanum().min(3).max(30).required(), 
//       password: Joi.string().regex(RegExp(pattern)).required().min(8)
//     }),
//     [Segments.QUERY]: {
//       token: Joi.string().token().required()
//     }
//   })