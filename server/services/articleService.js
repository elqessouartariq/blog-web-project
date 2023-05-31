const prisma = require('./prisma');

const getAllArticles = async () => {
	const articles = await prisma.article.findMany({
		include: {
			author: true,
		},
	});
	return articles;
};

const getOneArticle = async (id) => {
	const parsedId = parseInt(id);
	const oneArticle = await prisma.article.findUnique({
		where: {
			id: parsedId,
		},
		include: {
			author: true,
		},
	});
	return oneArticle;
};

const createNewArticle = async (data) => {
	const { title, content, authorId, image, published } = data;
	const article = {
		title: title,
		content: content,
		authorId: authorId,
		image: image,
		published: published,
	};
	const newArticle = await prisma.article.create({
		data: {
			...article,
		},
	});
	return newArticle;
};

const updateOneArticle = async (data, id) => {
	const { title, content, authorId, image, published } = data;
	const article = {
		title: title,
		content: content,
		authorId: authorId,
		image: image,
		published: published,
	};
	const updatedArticle = await prisma.article.update({
		where: {
			id: parseInt(id),
		},
		data: {
			title: article.title,
			content: article.content,
			authorId: article.authorId,
			image: article.image,
			published: article.published,
		},
	});
	return updatedArticle;
};

const deleteOneArticle = async (id) => {
	const deletedArticle = await prisma.article.delete({
		where: {
			id: parseInt(id),
		},
	});
	return deletedArticle;
};

module.exports = {
	getAllArticles,
	getOneArticle,
	createNewArticle,
	updateOneArticle,
	deleteOneArticle,
};
