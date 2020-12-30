const { body, validationResult, param } = require('express-validator')
const User = require('../models/user');

const userValidationRules = () => {
    return [
        body('email').isEmail().normalizeEmail().withMessage('Must be a valid email format').custom(value => {
          return new Promise((resolve, reject) => {
            User.findOne({email:value}, function(err, user){
              if(err) {
                reject(new Error('Server Error'))
              }
              if(Boolean(user)) {
               
                reject(new Error('E-mail already in use'))
              }
    
              resolve(true)
            });
          });
        }),
        body('password').isStrongPassword({ minLength: 8, minLowercase: 1, minUppercase: 1, minNumbers: 1, minSymbols: 1}).withMessage('Password should not be empty, minimum eight characters, at least one letter, one number and one special character')
      ]
  }
 
 



const accountSettingValidationRules = () => {
    return [
        body('email').isEmail().normalizeEmail().withMessage('Must be a valid email format'),
        body('password').isStrongPassword({ minLength: 8, minLowercase: 1, minUppercase: 1, minNumbers: 1, minSymbols: 1}).withMessage('Password should not be empty, minimum eight characters, at least one letter, one number and one special character'),
        //body('name').matches(/^[A-Za-z\s]+$/).withMessage('Must be text only'),
      ]
  }

const usernameParamValidationRules = () => {
    return [
        param('username').exists().withMessage("Invalid request"),
      ]
  }
const recipeParamValidationRules = () => {
    return [
        param('id').exists().isInt().withMessage('Recipe ID Not Found'),
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
    accountSettingValidationRules,
    recipeParamValidationRules,
    usernameParamValidationRules,
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