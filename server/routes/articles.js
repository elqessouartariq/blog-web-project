var express = require('express');
var router = express.Router();

const articlesController = require('../controllers/articlesController');

router.get('/', articlesController.getAllArticles);

router.get('/:id', articlesController.getOneArticle);

router.post('/', articlesController.createNewArticle);

router.patch('/:id', articlesController.updateOneArticle);

router.delete('/:id', articlesController.deleteOneArticle);

module.exports = router;
