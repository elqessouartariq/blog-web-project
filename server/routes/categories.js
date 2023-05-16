var express = require('express');
var router = express.Router();
const categoriesController = require('../controllers/categoriesController');

router.get('/', categoriesController.getAllCategories);

router.get('/:id', categoriesController.getOneCategorie);

router.post('/', categoriesController.createNewCategorie);

router.patch('/:id', categoriesController.updateOneCategorie);

router.delete('/:id', categoriesController.deleteOneCategorie);

module.exports = router;
