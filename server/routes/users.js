var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', (req, res) => {
	res.send('Get all userss');
});

router.get('/:id', (req, res) => {
	res.send('Get an existing users');
});

router.post('/', (req, res) => {
	res.send('Create a new users');
});

router.patch('/:id', (req, res) => {
	res.send('Update an existing users');
});

router.delete('/:id', (req, res) => {
	res.send('Delete an existing users');
});

module.exports = router;
