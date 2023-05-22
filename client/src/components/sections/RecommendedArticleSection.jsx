import PropTypes from 'prop-types';

const RecommendedArticleSection = ({ children }) => {
	return (
		<>
			<section className="mt-10">
				<div className="relative">
					<div className="absolute  flex inset-y-0 inset-x-8         items-center justify-end p-9">
						{children}
					</div>
					<img
						src="/src/assets/recommendedImage.svg"
						className="w-full h-full object-cover"
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
