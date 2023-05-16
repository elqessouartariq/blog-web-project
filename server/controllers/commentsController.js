const commentService = require('../services/commentService');

const getAllComments = (req, res) => {
	const allComments = commentService.getAllComments();
	res.send('Get all Comments');
};

const getOneComment = (req, res) => {
	const oneComment = commentService.getOneComment();
	res.send('Get an existing Comment');
};

const createNewComment = (req, res) => {
	const newComment = commentService.createNewComment();
	res.send('Create a new Comment');
};

const updateOneComment = (req, res) => {
	const updateComment = commentService.updateOneComment();
	res.send('Update an existing Comment');
};

const deleteOneComment = (req, res) => {
	const deleteComment = commentService.deleteOneComment();
	res.send('Delete an existing Comment');
};

module.exports = {
	getAllComments,
	getOneComment,
	createNewComment,
	updateOneComment,
	deleteOneComment,
};
