var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
	res.send('Get all categories');
});

router.get('/:id', (req, res) => {
	res.send('Get an existing categorie');
});

router.post('/', (req, res) => {
	res.send('Create a new categorie');
});

router.patch('/:id', (req, res) => {
	res.send('Update an existing categorie');
});

router.delete('/:id', (req, res) => {
	res.send('Delete an existing categorie');
});

module.exports = router;
