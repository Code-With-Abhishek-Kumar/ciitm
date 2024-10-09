import Joi from 'joi';

// for single message use .message({})
// for multiple message use .messages({})

let AlbumSchemaJoi = Joi.object({
  aName: Joi.string().min(5).max(60).required().messages({
    'string.empty': 'Name is required',
    'any.required': 'Name is required',
  }),

  aImage: Joi.string().trim().required().messages({
    'string.empty': 'Image is required',
    'any.required': 'Image is required',
  }),

  aDescription: Joi.string().min(5).max(80).required().messages({
    'string.empty': 'Description is required',
    'string.min': 'Description must be at least 5 characters',
    'string.max': 'Description must be at most 80 characters',
    'any.required': 'Description is required',
  }),

  Images: Joi.array()
    .items(Joi.string().pattern(/^[0-9a-fA-F]{24}$/)) // Validate each item is a valid ObjectId
    .required() // Ensure the array is present
    .messages({
      'array.base': 'Images must be an array',
      'array.empty': 'Images is required',
      'any.required': 'Images is required',
      'string.pattern.base': 'Each image ID must be a valid ObjectId',
    }),
});

export default AlbumSchemaJoi;
