const Joi = require('joi');

const createNewArticleSchema = Joi.object({
	title: Joi.string().required(),
	content: Joi.string().required(),
	authorId: Joi.number().integer().strict(true).required(),
	image: Joi.string().required(),
	published: Joi.boolean().optional(),
});

const updateArticleSchema = Joi.object({
	title: Joi.string().optional(),
	content: Joi.string().optional(),
	authorId: Joi.number().integer().strict(true).optional(),
	image: Joi.string().optional(),
	published: Joi.boolean().optional(),
});

module.exports = {
	createNewArticleSchema,
	updateArticleSchema,
};
