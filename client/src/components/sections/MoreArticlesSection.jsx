import HorizontalArticleCard from '../HorizontalArticleCard';

const MoreArticlesSection = () => {
	const categories = [
		'Technology',
		'Open Source',
		'JavaScript',
		'Minimalism',
		'Self-help',
		'Animals',
		'Herbivores',
		'HTML',
		'CSS',
		'PHP',
		'Web Technologies',
		'Career',
		'Life',
		'Spirituality',
		'Food',
		'Cooking',
		'Sports',
		'Racing',
		'Mountain Hiking',
		'Cruising',
	];

	return (
		<section className="w-10/12 mx-auto">
			<div className="flex flex-wrap-reverse lg:flex-nowrap justify-center">
				<div className="lg:w-3/4">
					<HorizontalArticleCard />
					<HorizontalArticleCard />
					<HorizontalArticleCard />
				</div>
				<div className="flex flex-wrap lg:block lg:flex-nowrap space-x-6 lg:w-1/4 mt-10">
					<h1 className="font-primary font-bold text-lg">
						Categories
					</h1>
					{categories.map((topic, index) => (
						<h1
							className="font-primary font-normal text-base leading-10"
							key={index}
						>
							{topic}
						</h1>
					))}
				</div>
			</div>
		</section>
	);
};

export default MoreArticlesSection;
