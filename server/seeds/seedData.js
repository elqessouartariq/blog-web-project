const prisma = require('../services/prisma');
const { faker } = require('@faker-js/faker');

const seedUsers = require('./seedUsers');
const seedCategories = require('./seedCategories');
const seedArticles = require('./seedArticles');
const seedComments = require('./seedComments');

async function seedData() {
	if (process.env.NODE_ENV !== 'development') {
		throw new Error('Seeding is only allowed in development environment');
	}
	await seedUsers(prisma, faker);
	await seedCategories(prisma, faker);
	await seedArticles(prisma, faker);
	await seedComments(prisma, faker);
}

seedData()
	.then(async () => {
		await prisma.$disconnect();
	})
	.catch(async (e) => {
		console.error(e);
		await prisma.$disconnect();
		process.exit(1);
	});
