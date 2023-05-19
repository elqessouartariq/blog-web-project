async function seedComments(prisma, faker) {
	const comments = [];

	for (let i = 0; i < 10; i++) {
		const comment = {
			content: faker.lorem.paragraph(),
			email: faker.internet.email(),
			articleId: faker.number.int({ min: 1, max: 10 }),
		};

		comments.push(comment);
	}

	await prisma.comment.createMany({ data: comments });
}

module.exports = seedComments;
