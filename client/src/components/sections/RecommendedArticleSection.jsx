import PropTypes from 'prop-types';

const RecommendedArticleSection = ({ children }) => {
	return (
		<>
			<section className="mt-10">
				<div className="relative">
					<div className="flex items-center justify-end p-9 z-10">
						{children}
					</div>
					<img
						src="/src/assets/recommendedImage.svg"
						className="w-full h-full object-cover absolute top-0 left-0 -z-40"
						alt="Big Article Image"
					/>
				</div>
			</section>
		</>
	);
};

RecommendedArticleSection.propTypes = {
	children: PropTypes.node.isRequired,
};

export default RecommendedArticleSection;
