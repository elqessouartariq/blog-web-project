const Joi = require('joi');

const createNewCategorieSchema = Joi.object({
	name: Joi.string().required(),
});

const updateCategorieSchema = Joi.object({
	name: Joi.string().optional(),
});

module.exports = {
	createNewCategorieSchema,
	updateCategorieSchema,
};
