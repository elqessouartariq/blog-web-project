const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const comparePasswords = (password, hash) => {
	return bcrypt.compare(password, hash);
};

const hashPassword = (password) => {
	return bcrypt.hash(password, 5);
};

const createJWT = (user) => {
	const token = jwt.sign(
		{ id: user.id, email: user.email },
		process.env.JWT_SECRET
	);
	return token;
};

const protect = (req, res, next) => {
	const bearer = req.headers.authorization;
	console.log(bearer);

	if (!bearer) {
		res.status(401);
		res.send('Not authorized');
		return;
	}

	const [, token] = bearer.split(' ');
	if (!token) {
		console.log('here');
		res.status(401);
		res.send('Not authorized');
		return;
	}

	try {
		const payload = jwt.verify(token, process.env.JWT_SECRET);
		req.user = payload;
		console.log(payload);
		next();
		return;
	} catch (e) {
		console.error(e);
		res.status(401);
		res.send('Not authorized');
		return;
	}
};

module.exports = {
	createJWT,
	protect,
	comparePasswords,
	hashPassword,
};
