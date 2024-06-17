import Joi from 'joi';
export const createContactSchema = Joi.object({
  name: Joi.string().min(3).max(20).required().message({
    'string.base': 'Name should be a string',
    'string.min': 'Name have at least {#limit} characters',
    'string.max': 'Name have at most {#limit} characters',
    'any.required': 'Name is required',
  }),
  phoneNumber: Joi.string().min(3).max(20).required().message({
    'string.base': 'Phonenumber should be a string',
    'string.min': 'Phonenumber have at least {#limit} characters',
    'string.max': 'Phonenumber have at most {#limit} characters',
    'any.required': 'Phonenumber is required',
  }),
  email: Joi.string().min(3).max(20).email().message({
    'string.base': 'Email should be a string',
    'string.email': 'Email must be a valid email address',
  }),
  isFavourite: Joi.boolean().message({
    'boolean.base': 'isFavourite should be a boolean',
  }),
  contactType: Joi.string().valid('work', 'home', 'personal').message({
    'string.base': 'Contact type should be a string',
    'any.only':
      'Contact type must be one of the following: work, home, personal',
  }),
});

export const upDateContactSchema = Joi.object({
  name: Joi.string().min(3).max(20).message({
    'string.base': 'Name should be a string',
    'string.min': 'Name must have at least {#limit} characters',
    'string.max': 'Name must have at most {#limit} characters',
  }),
  phoneNumber: Joi.string().min(3).max(20).message({
    'string.base': 'Phonenumber should be a string',
    'string.min': 'Phonenumber must have at least {#limit} characters',
    'string.max': 'Phonenumber must have at most {#limit} characters',
  }),
  email: Joi.string().min(3).max(20).email().message({
    'string.base': 'Email should be a string',
    'string.email': 'Email must be a valid email address',
  }),
  isFavourite: Joi.boolean().message({
    'boolean.base': 'isFavourite should be a boolean',
  }),
  contactType: Joi.string().valid('work', 'home', 'personal').message({
    'string.base': 'Contact type should be a string',
    'any.only':
      'Contact type must be one of the following: work, home, personal',
  }),
});
