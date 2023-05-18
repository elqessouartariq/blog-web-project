const commentService = require('../services/commentService');

const getAllComments = async (req, res) => {
	const allComments = await commentService.getAllComments();
	if (!allComments) {
		return res.status(404).send('No Comments Found');
	}
	res.json(allComments);
};

const getOneComment = async (req, res) => {
	const { id } = req.params;
	const oneComment = await commentService.getOneComment(id);
	if (!oneComment) {
		return res.status(404).send('No Comment Found');
	}
	res.json(oneComment);
};

const createNewComment = async (req, res) => {
	const newComment = await commentService.createNewComment(req.body);
	res.json(newComment);
};

const updateOneComment = async (req, res) => {
	const { id } = req.params;
	const updateComment = await commentService.updateOneComment(req.body, id);
	res.json(updateComment);
};

const deleteOneComment = async (req, res) => {
	const { id } = req.params;
	const deleteComment = await commentService.deleteOneComment(id);
	res.json(deleteComment);
};

module.exports = {
	getAllComments,
	getOneComment,
	createNewComment,
	updateOneComment,
	deleteOneComment,
};
