const categorieService = require('../services/categorieService');
const {
	createNewCategorieSchema,
	updateCategorieSchema,
} = require('../validators/categoryValidator');

const getAllCategories = async (req, res) => {
	const allCategories = await categorieService.getAllCategories();
	if (!allCategories) {
		res.status(404).send('No Categories found');
	}
	res.send(allCategories);
};

const getOneCategorie = async (req, res) => {
	const oneCategorie = await categorieService.getOneCategorie(req.params);
	if (!oneCategorie) {
		res.status(404).send('No Categorie found');
	}
	res.send(oneCategorie);
};

const createNewCategorie = async (req, res) => {
	const { error } = createNewCategorieSchema.validate(req.body, {
		abortEarly: false,
	});

	if (error) {
		res.status(400);
		res.send(error.details);
	}

	const newCategorie = await categorieService.createNewCategorie(req.body);
	res.json(newCategorie);
};

const updateOneCategorie = async (req, res) => {
	const { error } = updateCategorieSchema.validate(req.body, {
		abortEarly: false,
	});
	if (error) {
		res.status(400);
		res.send(error.details);
	}

	const { id } = req.params;
	const updateCategorie = await categorieService.updateOneCategorie(
		req.body,
		id
	);
	res.json(updateCategorie);
};

const deleteOneCategorie = async (req, res) => {
	const { id } = req.params;
	const deleteCategorie = await categorieService.deleteOneCategorie(id);
	res.json(deleteCategorie);
};

module.exports = {
	getAllCategories,
	getOneCategorie,
	createNewCategorie,
	updateOneCategorie,
	deleteOneCategorie,
};
