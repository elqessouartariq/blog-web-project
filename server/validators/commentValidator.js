const Joi = require('joi');

const createNewCommentSchema = Joi.object({
	content: Joi.string().required(),
	email: Joi.string().email().required(),
	articleId: Joi.number().integer().strict(true).required(),
});

const updateCommentSchema = Joi.object({
	content: Joi.string().optional(),
	email: Joi.string().email().required(),
	articleId: Joi.number().integer().strict(true).required(),
});

module.exports = {
	createNewCommentSchema,
	updateCommentSchema,
};
