const prisma = require('./prisma');

const getAllComments = async () => {
	const allComments = await prisma.comment.findMany();
	return allComments;
};

const getOneComment = async (id) => {
	const parsedId = parseInt(id);
	const oneComment = await prisma.comment.findUnique({
		where: {
			id: parsedId,
		},
	});
	return oneComment;
};

const createNewComment = async (data) => {
	const { content, articleId, email } = data;
	const comment = {
		content,
		articleId: parseInt(articleId),
		email,
	};
	const newComment = await prisma.comment.create({
		data: {
			...comment,
		},
	});
	return newComment;
};

const updateOneComment = async (data, id) => {
	const parsedId = parseInt(id);
	const { content, articleId, email } = data;
	const comment = {
		content,
		articleId: parseInt(articleId),
		email,
	};
	const updatedComment = await prisma.comment.update({
		where: {
			id: parsedId,
		},
		data: {
			content: comment.content,
			articleId: comment.articleId,
			email: comment.email,
		},
	});
	return updatedComment;
};

const deleteOneComment = async (id) => {
	const parsedId = parseInt(id);
	const deletedComment = await prisma.comment.delete({
		where: {
			id: parsedId,
		},
	});
	return deletedComment;
};

module.exports = {
	getAllComments,
	getOneComment,
	createNewComment,
	updateOneComment,
	deleteOneComment,
};
