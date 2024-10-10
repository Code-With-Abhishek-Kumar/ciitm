import Joi from 'joi';

// for single message use .message({})
// for multiple message use .messages({})

// Define your Joi schema
let AlbumSchemaJoi = Joi.object({
  albumName: Joi.string().min(5).max(60).required().messages({
    'string.empty': 'Name is required',
    'any.required': 'Name is required',
  }),

  albumImage: Joi.string().trim().required().messages({
    'string.empty': 'Image URL is required',
    'any.required': 'Image URL is required',
  }),

  albumDescription: Joi.string().min(5).required().messages({
    'string.empty': 'Description is required',
    'string.min': 'Description must be at least 5 characters',
    'string.max': 'Description must be at most 12 characters',
    'any.required': 'Description is required',
  }),

  Images: Joi.array()
    .items(Joi.string().pattern(/^[0-9a-fA-F]{24}$/))
    .required()
    .messages({
      'array.base': 'Images must be an array',
      'array.empty': 'Images is required',
      'any.required': 'Images is required',
      'string.pattern.base': 'Each image ID must be a valid ObjectId',
    }),
});

export default AlbumSchemaJoi;
