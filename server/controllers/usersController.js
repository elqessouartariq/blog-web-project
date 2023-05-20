const userService = require('../services/userService');

const register = async (req, res) => {
	const token = await userService.register(req.body);
	res.send({ token });
};

const signin = async (req, res) => {
	const token = await userService.signin(req.body);
	if (!token) {
		res.status(401);
		res.send('username or password is incorrect');
	}
	res.send({ token });
};

module.exports = {
	register,
	signin,
};
