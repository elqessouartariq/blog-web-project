const articleService = require('../services/articleService');

const getAllArticles = (req, res) => {
	const allArticles = articleService.getAllArticles();
	res.send('Get all articles');
};

const getOneArticle = (req, res) => {
	const oneArticle = articleService.getOneArticle();
	res.send('Get an existing articles');
};

const createNewArticle = (req, res) => {
	const newArticle = articleService.createNewArticle();
	res.send('Create a new articles');
};

const updateOneArticle = (req, res) => {
	const updateArticle = articleService.updateOneArticle();
	res.send('Update an existing articles');
};

const deleteOneArticle = (req, res) => {
	const deleteArticle = articleService.deleteOneArticle();
	res.send('Delete an existing articles');
};

module.exports = {
	getAllArticles,
	getOneArticle,
	createNewArticle,
	updateOneArticle,
	deleteOneArticle,
};
