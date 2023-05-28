var express = require('express');
var router = express.Router();

const usersController = require('../controllers/usersController');

router.post('/register', usersController.register);
router.post('/signin', usersController.signin);

router.get('/', (req, res) => {
	res.send('Get all users');
});

router.get('/:id', usersController.getOneUser);

router.patch('/:id', (req, res) => {
	res.send('Update an existing users');
});

router.delete('/:id', (req, res) => {
	res.send('Delete an existing users');
});

module.exports = router;
