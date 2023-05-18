const prisma = require('./prisma');

const getAllCategories = async () => {
	const categories = await prisma.category.findMany();
	return categories;
};

const getOneCategorie = async ({ id }) => {
	const parsedId = parseInt(id);
	const categorie = await prisma.category.findUnique({
		where: {
			id: parsedId,
		},
	});
	return categorie;
};

const createNewCategorie = async (data) => {
	const { name } = data;
	const categorie = await prisma.category.create({
		data: {
			name,
		},
	});
	return categorie;
};

const updateOneCategorie = async (data, id) => {
	const parsedId = parseInt(id);
	const { name } = data;
	const categorie = await prisma.category.update({
		where: {
			id: parsedId,
		},
		data: {
			name: name,
		},
	});
	return categorie;
};

const deleteOneCategorie = async (id) => {
	const parsedId = parseInt(id);
	const deletedCategorie = await prisma.category.delete({
		where: {
			id: parsedId,
		},
	});
	return deletedCategorie;
};

module.exports = {
	getAllCategories,
	getOneCategorie,
	createNewCategorie,
	updateOneCategorie,
	deleteOneCategorie,
};
