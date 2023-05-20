const Joi = require('joi');

const registerValidationSchema = Joi.object({
	name: Joi.string().required(),
	email: Joi.string().email().required(),
	password: Joi.string().min(8).required(),
	confirmPassword: Joi.string().valid(Joi.ref('password')).required(),
});

const signinValidationSchema = Joi.object({
	email: Joi.string().email().required(),
	password: Joi.string().min(8).required(),
});

module.exports = {
	registerValidationSchema,
	signinValidationSchema,
};
