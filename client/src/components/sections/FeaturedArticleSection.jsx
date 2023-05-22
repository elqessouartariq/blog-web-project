import PropTypes from 'prop-types';

const FeaturedArticleSection = ({ children }) => {
	return (
		<section className="mt-10">
			<div className="relative">
				<div className="absolute  inset-y-3 inset-x-[75px]">
					{children}
				</div>

				<img
					src="/src/assets/BigArticleImage.svg"
					className="w-full h-full object-cover"
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
