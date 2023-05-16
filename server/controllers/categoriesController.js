const categorieService = require('../services/categorieService');

const getAllCategories = (req, res) => {
	const allCategories = categorieService.getAllCategories();
	res.send('Get all Categories');
};

const getOneCategorie = (req, res) => {
	const oneCategorie = categorieService.getOneCategorie();
	res.send('Get an existing Categorie');
};

const createNewCategorie = (req, res) => {
	const newCategorie = categorieService.createNewCategorie();
	res.send('Create a new Categorie');
};

const updateOneCategorie = (req, res) => {
	const updateCategorie = categorieService.updateOneCategorie();
	res.send('Update an existing Categorie');
};

const deleteOneCategorie = (req, res) => {
	const deleteCategorie = categorieService.deleteOneCategorie();
	res.send('Delete an existing Categorie');
};

module.exports = {
	getAllCategories,
	getOneCategorie,
	createNewCategorie,
	updateOneCategorie,
	deleteOneCategorie,
};
