const articleService = require('../services/articleService');
const {
	createNewArticleSchema,
	updateArticleSchema,
} = require('../validators/articleValidator');

const getAllArticles = async (req, res) => {
	const allArticles = await articleService.getAllArticles();
	if (!allArticles) {
		res.status(404).json({ error: 'No articles found' });
	}
	res.json(allArticles);
};

const getOneArticle = async (req, res) => {
	const { id } = req.params;
	const oneArticle = await articleService.getOneArticle(id);
	if (!oneArticle) {
		res.status(404).json({ error: 'No article found with the given id' });
	}
	res.json(oneArticle);
};

const createNewArticle = async (req, res) => {
	const { error } = createNewArticleSchema.validate(req.body, {
		abortEarly: false,
	});

	if (error) {
		res.status(400);
		res.send(error.details);
		return;
	}

	const newArticle = await articleService.createNewArticle(req.body);
	res.json(newArticle);
};

const updateOneArticle = async (req, res) => {
	const { error } = updateArticleSchema.validate(req.body, {
		abortEarly: false,
	});

	if (error) {
		res.status(400);
		res.send(error.details);
		return;
	}

	const { id } = req.params;
	const updateArticle = await articleService.updateOneArticle(req.body, id);
	res.json(updateArticle);
};

const deleteOneArticle = async (req, res) => {
	const { id } = req.params;
	const deleteArticle = await articleService.deleteOneArticle(id);
	res.json(deleteArticle);
};

module.exports = {
	getAllArticles,
	getOneArticle,
	createNewArticle,
	updateOneArticle,
	deleteOneArticle,
};
