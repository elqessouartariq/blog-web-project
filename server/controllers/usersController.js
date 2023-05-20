const userService = require('../services/userService');
const {
	registerValidationSchema,
	signinValidationSchema,
} = require('../validators/userValidator');

const register = async (req, res) => {
	const { error } = registerValidationSchema.validate(req.body, {
		abortEarly: false,
	});

	if (error) {
		res.status(400);
		res.send(error.details);
		return;
	}

	const token = await userService.register(req.body);
	res.send({ token });
};

const signin = async (req, res) => {
	const { error } = signinValidationSchema.validate(req.body, {
		abortEarly: false,
	});

	if (error) {
		res.status(400);
		res.send(error.details);
		return;
	}

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
