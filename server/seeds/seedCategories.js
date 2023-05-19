async function seedCategories(prisma, faker) {
	const categories = [];

	for (let i = 0; i < 10; i++) {
		const category = {
			name: faker.lorem.word(),
		};

		categories.push(category);
	}

	await prisma.category.createMany({ data: categories });
}

module.exports = seedCategories;
