const {
	createJWT,
	hashPassword,
	comparePasswords,
} = require('../modules/auth');

const prisma = require('./prisma');

const register = async (data) => {
	const hash = await hashPassword(data.password);

	const user = await prisma.user.create({
		data: {
			name: data.name,
			email: data.email,
			username: data.username,
			about: data.about,
			password: hash,
		},
	});

	const token = createJWT(user);
	return token;
};

const signin = async (data, res) => {
	const user = await prisma.user.findUnique({
		where: { email: data.email },
	});

	if (!user) return {token: null, user: null};

	const isValid = await comparePasswords(data.password, user.password);

	if (!isValid) return {token: null, user: null};

	const token = createJWT(user);
	return { token, user };
};

const getOneUser = async (id) => {
	const parsedId = parseInt(id);
	const oneUser = await prisma.user.findUnique({
		where: {
			id: parsedId,
		},
	});
	return oneUser;
};
module.exports = {
	register,
	signin,
	getOneUser,
};
