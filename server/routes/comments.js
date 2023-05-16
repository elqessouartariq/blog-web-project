var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
	res.send('Get all commentss');
});

router.get('/:id', (req, res) => {
	res.send('Get an existing comment');
});

router.post('/', (req, res) => {
	res.send('Create a new comment');
});

router.patch('/:id', (req, res) => {
	res.send('Update an existing comment');
});

router.delete('/:id', (req, res) => {
	res.send('Delete an existing comment');
});

module.exports = router;
