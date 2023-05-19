async function seedArticles(prisma, faker) {
	const articles = [];

	for (let i = 0; i < 10; i++) {
		const article = {
			title: faker.lorem.sentence(),
			content: faker.lorem.paragraphs(3),
			image: faker.image.url(),
			published: faker.datatype.boolean(),
			authorId: faker.number.int({ min: 1, max: 10 }),
		};

		articles.push(article);
	}

	await prisma.article.createMany({ data: articles });
}

module.exports = seedArticles;
