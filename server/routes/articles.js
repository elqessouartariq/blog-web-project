var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
	res.send('Get all articles');
});

router.get('/:id', (req, res) => {
	res.send('Get an existing article');
});

router.post('/', (req, res) => {
	res.send('Create a new article');
});

router.patch('/:id', (req, res) => {
	res.send('Update an existing article');
});

router.delete('/:id', (req, res) => {
	res.send('Delete an existing article');
});

module.exports = router;
