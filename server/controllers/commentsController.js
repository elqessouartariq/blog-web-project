const commentService = require('../services/commentService');
const {
	createNewCommentSchema,
	updateCommentSchema,
} = require('../validators/commentValidator');

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
	const { error } = createNewCommentSchema.validate(req.body, {
		abortEarly: false,
	});

	if (error) {
		res.status(400);
		res.send(error.details);
		return;
	}

	const newComment = await commentService.createNewComment(req.body);
	res.json(newComment);
};

const updateOneComment = async (req, res) => {
	const { error } = updateCommentSchema.validate(req.body, {
		abortEarly: false,
	});
	if (error) {
		res.status(400);
		res.send(error.details);
		return;
	}

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
