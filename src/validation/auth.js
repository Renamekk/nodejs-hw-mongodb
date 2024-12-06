import Joi from 'joi';
import { emailRegEx } from '../constants/auth.js';

export const registerUserSchema = Joi.object({
  name: Joi.string().min(3).max(20).required(),
  email: Joi.string().pattern(emailRegEx).required(),
  password: Joi.string().required(),
});

export const loginUserSchema = Joi.object({
  email: Joi.string().required(),
  password: Joi.string().required(),
});