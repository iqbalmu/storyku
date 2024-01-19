import Joi from 'joi'

const createStoryValidation = Joi.object({
  title: Joi.string().required(),
  writer: Joi.string().required(),
  synopsis: Joi.string().required(),
  category: Joi.string().required(),
  tags: Joi.string().required(),
  cover: Joi.string().required(),
  status: Joi.string().required(),
})

const updateStoryValidation = Joi.object({  
  title: Joi.string().optional(),
  writer: Joi.string().optional(),
  synopsis: Joi.string().optional(),
  category: Joi.string().optional(),
  tags: Joi.string().optional(),
  cover: Joi.string().optional(),
  status: Joi.string().optional(),
})

export { createStoryValidation, updateStoryValidation }