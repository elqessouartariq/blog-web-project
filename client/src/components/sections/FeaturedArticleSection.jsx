import PropTypes from 'prop-types';

const FeaturedArticleSection = ({ children }) => {
	return (
		<section className="mt-10 ">
			<div className="relative">
				<div className="flex  items-center justify-start p-9 z-10">
					{children}
				</div>

				<img
					src="/src/assets/BigArticleImage.svg"
					className="w-full h-full object-cover absolute top-0 left-0 -z-40"
					alt="Big Article Image"
				/>
			</div>
		</section>
	);
};

FeaturedArticleSection.propTypes = {
	children: PropTypes.node.isRequired,
};

export default FeaturedArticleSection;
