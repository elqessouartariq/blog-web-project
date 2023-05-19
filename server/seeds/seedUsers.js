async function seedUsers(prisma, faker) {
	const users = [];

	for (let i = 0; i < 10; i++) {
		const user = {
			name: faker.person.firstName(),
			email: faker.internet.email(),
			password: faker.internet.password(),
		};

		users.push(user);
	}

	await prisma.user.createMany({ data: users });
}

module.exports = seedUsers;
