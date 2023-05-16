var express = require('express');
var router = express.Router();
const commentsController = require('../controllers/commentsController');

router.get('/', commentsController.getAllComments);

router.get('/:id', commentsController.getOneComment);

router.post('/', commentsController.createNewComment);

router.patch('/:id', commentsController.updateOneComment);

router.delete('/:id', commentsController.deleteOneComment);

module.exports = router;
